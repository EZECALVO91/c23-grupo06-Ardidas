const fs = require("fs");
const { setJson, getJson } = require("../utility/jsonMethod");
const db = require("../database/models");
const { Sequelize } = require("../database/models");

const productsController = {
  index: (req, res) => {
    let products = db.Product.findAll({
      include: [{ 
        association: "Image_products"}],
    });
    Promise.all([products])
      .then(([products]) => {
        res.render("products/products", {
          title: "Ardidas",
          usuarioLogeado: req.session.usuarioLogin,
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  productDetail: (req, res) => {
    let product = db.Product.findByPk(req.params.id,{
        include: [{
            association: "Image_products"},
          {
            association: "Category_products"},
          {
            association: "Sizes"}],
      });
      Promise.all([product])
        .then(([product]) => {
            return res.render("products/productDetail",{
            product,
            usuarioLogeado: req.session.usuarioLogin,
            title: "Detalle"
        })})
        .catch(error=> console.log(error));
  },
  productCart: (req, res) => {
    let product = db.Product.findByPk(req.params.id,{
      include: [{
          association: "Image_products"}],
    });
    Promise.all([product])
      .then(([product]) => {
          return res.render("products/productCart",{
          product,
          usuarioLogeado: req.session.usuarioLogin,
          title: "Carrito"
      })})
      .catch(error=> console.log(error));
  },
  dashboard: (req, res) => {
    let products = db.Product.findAll({
        include: [{
          association:"Image_products"}]     
    })  
    Promise.all([products])
    .then(([products]) => {
        res.render("products/dashboard",{
        title: "Dashboard",
        usuarioLogeado: req.session.usuarioLogin,
        products,
    
    })})
    .catch(error=> console.log(error));
  },
  productLoad: (req, res) => {
    res.render("products/productLoad", {
      title: "Crear",
      usuarioLogeado: req.session.usuarioLogin,
    });
  },
  create: (req, res) => {
    const file = req.file;
    const { name, price,  category,  description, sizes, color} = req.body;
    db.Product.create({
      name,
      color,
      price,
      description,
      id_category_product: category,
      createdAt:new Date,
      updatedAt:new Date
    })
     .then((resp)=>{
       db.Image_product.create({
          filename: file ? file.filename : "default-image.png",
          id_product: resp.dataValues.id,
          createdAt:new Date,
         updatedAt:new Date
       })
       for (let i=0; i<sizes.length; i++){
       db.Stock.create({
        id_product: resp.dataValues.id,
        id_size: sizes[i],
        createdAt:new Date,
        updatedAt:new Date
      })
      }
   })
    .then(()=>{
     res.redirect("/products/dashboard");
    })
    .catch(error=> console.log(error));
  },
  productEdit: (req, res) => {
    let product = db.Product.findByPk(req.params.id,{
      include: [{
          association: "Image_products"},
        {
          association: "Category_products"},
        {
          association: "Sizes"}],
    });
    Promise.all([product])
      .then(([product]) => {
           return res.render("products/productEdit",{
           product,
           usuarioLogeado: req.session.usuarioLogin,
           title: "Editar producto",
          
       })
      // res.send(product.Sizes)
      // console.log("Holaaaaaaaaaaaaaa", product.Sizes[0].id == 3)
    })
      .catch(error=> console.log(error));
  },
  update: (req, res) => {
    const { id } = req.params;
    const products = getJson("product");
    const { nombre, precio, descripcion, imagen, category, talles, color } =
      req.body;
    const nuevoArray = products.map((product) => {
      if (product.id == id)
        return {
          id: +id,
          nombre: nombre.trim(),
          talles: talles >= 1 ? [talles] : talles,
          color: Array.isArray(color) ? color : [color],
          precio: +precio,
          descripcion: descripcion.trim(),
          imagen: imagen ? imagen : product.imagen,
          category,
        };

      return product;
    });
    setJson(nuevoArray, "product");
    res.redirect(`/products/detalle/${id}`);
  },
  destroy: (req, res) => {
         db.Product.destroy({
             where : {
                 id : req.params.id
             }
         })
         .then(()=>res.redirect("/products/dashboard"))
         .catch(error => console.log(error))
  },
};

module.exports = productsController;
