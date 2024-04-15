
const db = require("../database/models");
const { Sequelize } = require("../database/models");
const { Op } = require("sequelize");

const indexController = {
    index:(req,res)=>{
        let ofertas = db.Product.findAll({
            order: Sequelize.literal('rand()'),
            where: { id_category_product: 1 },
            include: [
              {
                association: "Image_products",
              },
              {
                association: "Category_products",
                attributes: ["id", "category"],
              }, 
            ],
            limit: 3, 
          });
          let destacados = db.Product.findAll({
            order: Sequelize.literal('rand()'),
            where: { id_category_product: 2 },
            include: [
              {
                association: "Image_products",
              },
              {
                association: "Category_products",
                attributes: ["id", "category"],
              },              
            ],
            limit: 6, 
          });
      
          Promise.all([ofertas, destacados])
            .then(([ofertas, destacados]) => {
              res.render("index", {
                title: "Ardidas",
                usuarioLogeado: req.session.usuarioLogin,
                ofertas,
                destacados
              });
            })
            .catch((error) => console.log(error));
    },
    search: (req, res) => {
      const {keywords} = req.query;
  
      let productsSearch = db.Product.findAll({
        where : {
          [Op.or] : [
            {
              name: {
                [Op.substring]: keywords
              }
            },
            {
              color: {
                [Op.substring]: keywords
              }
            },
          ]
        },
        include: [
          {
            association: "Image_products",
          },
        ]
      })  
          Promise.all([productsSearch])
        .then(([productsSearch]) => {
          return res.render('search', {
            title: "Resultados",
            usuarioLogeado: req.session.usuarioLogin,
            products : productsSearch,
            keywords,
          })
        })
        .catch(error => console.log(error))
  
    },
    contacto: (req, res) => {
      if(req.session.usuarioLogin){
        db.User.findByPk(req.session.usuarioLogin.id)
        .then((response) => {
        res.render("contacto", {title:"Contacto", usuarioLogeado: response.dataValues })
      })
      .catch((err) => console.log(err));
      } else {
       res.render("contacto", {title:"Contacto", usuarioLogeado: req.session.usuarioLogin })
     }
    },
    ayuda: (req, res) => {
      res.render("ayuda",  {title:"Ayuda", usuarioLogeado: req.session.usuarioLogin } )
    }
}
module.exports = indexController