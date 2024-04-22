const fs = require("fs");
const { setJson, getJson } = require("../utility/jsonMethod");
const db = require("../database/models");
const { Sequelize } = require("../database/models");
const { validationResult } = require("express-validator");

const productsController = {
  index: async (req, res) => {
    try {
        const pageProducts = 9; // Define la cantidad de productos por página
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const startIndex = (currentPage - 1) * pageProducts;
        // Consulta los productos para la página actual y obtiene el total de productos
        const [products, totalProducts] = await Promise.all([
            db.Product.findAll({
                include: [{ association: "Image_products" }],
                limit: pageProducts,
                offset: startIndex,
            }),
            db.Product.count()
        ]);
        const totalPages = Math.ceil(totalProducts / pageProducts); // Calcula el total de páginas

        res.render("products/products", {
            title: "Productos | Ardidas",
            usuarioLogeado: req.session.usuarioLogin,
            products,
            currentPage,
            totalPages,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al cargar los productos");
    }
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
             title: "Detalle | Ardidas"
         })
      })
        .catch(error=> console.log(error));
  },
  productCart: (req, res) => {
         return res.render("products/productCart",{
         usuarioLogeado: req.session.usuarioLogin,
         title: "Carrito | Ardidas"
          
        })
  },
  
  dashboard: async (req, res) => {
    try {
        const pageProducts = 9; // Define la cantidad de productos por página
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const startIndex = (currentPage - 1) * pageProducts;
        // Consulta los productos para la página actual y obtiene el total de productos
        const [products, totalProducts] = await Promise.all([
            db.Product.findAll({
                include: [{ association: "Image_products" }],
                limit: pageProducts,
                offset: startIndex,
                order: [['createdAt', 'DESC']] // Ordena por el último ID creado (en orden descendente)
            }),
            db.Product.count()
        ]);
        const totalPages = Math.ceil(totalProducts / pageProducts); // Calcula el total de páginas

        res.render("products/dashboard", {
            title: "Dashboard productos | Ardidas",
            usuarioLogeado: req.session.usuarioLogin,
            products,
            currentPage,
            totalPages,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al cargar los productos del dashboard");
    }
},


  productLoad: (req, res) => {
    res.render("products/productLoad", {
      title: "Crear producto | Ardidas",
      usuarioLogeado: req.session.usuarioLogin,
    });
  },
  create: (req, res) => {
    const errores = validationResult(req); 
    if (!errores.isEmpty()) {
      // console.log("Ingrese en errores");
      res.render("products/productLoad", {errores: errores.mapped(),old: req.body,title: "Crear producto | ERROR",usuarioLogeado: req.session.usuarioLogin,
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
           title: "Editar producto | Ardidas",   
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
      res.render("products/productEdit", {errores: errores.mapped(),old: req.body,title: "Editar producto | ERROR",usuarioLogeado: req.session.usuarioLogin, product
      });
  } else {
    const { id } = req.params;
    const file = req.files;
    const { name, price,  category,  description, sizes, color, image} = req.body;
   
    console.log("Que llega en file:  ", file)


    // db.Image_product.findAll({
    //   where: { 
    //     id_product : id
    //   }
    
    
    // })
    // .then((resp) => {
    //   console.log("Respuesta:", resp)
    // })
    // .catch (e => {
    //   console.log(e)
    // })
        for (let i=0; i<sizes.length; i++){  
        db.Stock.destroy({
            where : {
                id_product : id
            }
        })
    }
    // for (const key in file) {
    //   file[key].forEach(element => {
    //     console.log("Que es element", element)
    //     db.Image_product.destroy({
    //       where : {
    //         id_product : id
    //     }
    //    })
    //   })
    // }
       
 
    db.Product.update({
      name,
      color,
      price,
      description,
      id_category_product: category,
      updatedAt:new Date
    },
    {
      where:{id}
    })
      .then(()=>{
        // console.log("Que manda la promesa en resp: lo mandaba vacio", )
        // console.log("Y en id?: ", id)
        for (const key in file) {
          file[key].forEach(element => {
            db.Image_product.create({
              filename: element.filename,
              id_product: id,
              createdAt:new Date,
             updatedAt:new Date
           })
          });
       
       }

        // db.Image_product.update({
        //    filename: file ? file.filename : image,
        //    id_product: resp.id,
        //    createdAt:new Date,
        //   updatedAt:new Date
        // },
        // {
        //   where:{id}
        // })
        for (let i=0; i<sizes.length; i++){
                 db.Stock.create({
                  id_product: req.params.id,
                  id_size: sizes[i],
                  createdAt:new Date,
                  updatedAt:new Date
               }
                )
                }

         
    })
    .then(()=>{
    res.redirect(`/products/detalle/${id}`);
    })
  
    .catch(error=> console.log(error));
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
