const fs = require("fs");
const { setJson, getJson } = require("../utility/jsonMethod");
const db = require("../database/models");
const { Sequelize } = require("../database/models");
const { validationResult } = require("express-validator");

const productsController = {
  index: (req, res) => {
    let products = db.Product.findAll({
      include: [{ 
        association: "Image_products"}],
    });
    Promise.all([products])
      .then(([products]) => {
        res.render("products/products", {
          title: "Ardidas",usuarioLogeado: req.session.usuarioLogin, products,
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
         })
      })
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
    const errores = validationResult(req); 
    if (!errores.isEmpty()) {
      // console.log("Ingrese en errores");
      res.render("products/productLoad", {errores: errores.mapped(),old: req.body,title: "Error al crear",usuarioLogeado: req.session.usuarioLogin,
      });
  } else {
    const file = req.files;
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
      if(Object.keys(file).length > 0) {
        console.log("Llega algo en file: ", file)
        // file.forEach(element => { 
          for (const key in file) {
            file[key].forEach(element => {
              db.Image_product.create({
                filename: element.filename,
                id_product: resp.dataValues.id,
                createdAt:new Date,
               updatedAt:new Date
             })
            });
         
         }
      } else {
        db.Image_product.create({
          filename: "default-image.png",
          id_product: resp.dataValues.id,
          createdAt:new Date,
         updatedAt:new Date
        })
      }
      
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
  }
    
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
    })
      .catch(error=> console.log(error));
  },
  update: (req, res) => {
    const errores = validationResult(req); 
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
      
    
    if (!errores.isEmpty()) {
      // console.log("Ingrese en errores de edición PUT");
      res.render("products/productEdit", {errores: errores.mapped(),old: req.body,title: "Error al editar",usuarioLogeado: req.session.usuarioLogin, product
      });
  } else {
    const { id } = req.params;
    const file = req.files;
    const { name, price,  category,  description, sizes, color, image} = req.body;
   
    console.log("Que llega en file:  ", file)


    db.Image_product.findAll({
      where: { 
        id_product : id
      }
    
    
    })
    .then((resp) => {
      console.log("Respuesta:", resp)
    })
    .catch (e => {
      console.log(e)
    })
    //     for (let i=0; i<sizes.length; i++){  
    //     db.Stock.destroy({
    //         where : {
    //             id_product : id
    //         }
    //     })
    // }
 
    // db.Product.update({
    //   name,
    //   color,
    //   price,
    //   description,
    //   id_category_product: category,
    //   createdAt:new Date,
    //   updatedAt:new Date
    // },
    // {
    //   where:{id}
    // })
    //   .then((resp)=>{
    //     db.Image_product.update({
    //        filename: file ? file.filename : image,
    //        id_product: resp.id,
    //        createdAt:new Date,
    //       updatedAt:new Date
    //     },
    //     {
    //       where:{id}
    //     })
    //     for (let i=0; i<sizes.length; i++){
    //              db.Stock.create({
    //               id_product: req.params.id,
    //               id_size: sizes[i],
    //               createdAt:new Date,
    //               updatedAt:new Date
    //            }
    //             )
    //             }

         
    // })
    // .then(()=>{
    // res.redirect(`/products/detalle/${id}`);
    // })
  
    // .catch(error=> console.log(error));
  }
})
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
