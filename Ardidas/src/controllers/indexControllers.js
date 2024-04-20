
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
      console.log("Que mando?: ", keywords)
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
      let zapatillasDama = db.Product.findAll({
        where : {
          [Op.or] : [

            {
              color: "rosadas"
            },
          ]
        },
        include: [
          {
            association: "Image_products",
          },
        ]
      })  
      // Buscamos el productos por categoría
  let categorySearch = db.Category_product.findOne({
    where: {
      category: {
        [Op.substring]: keywords
      }
    },
    include: [              //a categoria le incluimos los productos y sus imagenes
      {
        association: 'Products',
        include: [
          {
            association: 'Image_products'
          }
        ]
      }
    ]
  });

  let excepciones = db.Product.findAll(
    
    {
      include: [
        {
          association: "Image_products",
        },
      ]
    }
  )
  
          Promise.all([productsSearch, categorySearch, excepciones, zapatillasDama]) //a la promesa solo le agregamos la categoria para que busque tanto un producto como una categoria
        .then(([productsSearch, categoryResult, excepciones, zapatillasDama]) => {
          let products = [];//creamos una variable para guardar los productos y/o categoria que busquemos
            if(productsSearch){
              products = products.concat(productsSearch) //este if te trae todas las repuestas si buscamos por un producto especifico
            }
            if(categoryResult && categoryResult.Products){
              products = products.concat(categoryResult.Products);//y este trae todos los productos que tiene esa categoria por eso nos fijamos los productos que tiene categoryResult
            }
            //Filtro para mi mamá que se le dió por buscar de esta manera en un ecommerce que vende unicamente zapatillas
            if(keywords.toLowerCase() == "zapatilla" || keywords.toLowerCase() == "zapatillas" || keywords.toLowerCase() == "zapa" || keywords.toLowerCase() == "zapas"){
              products = products.concat(excepciones)
            }
            //Filtro para mi mamá que se le dió por buscar ZAPATILLAS DAMA
            if(keywords.toLowerCase() == "zapatillas dama" || keywords.toLowerCase() == "zapatilla dama" || keywords.toLowerCase() == "zapatilla mujer" || keywords.toLowerCase() == "zapatillas mujer") {
              products = products.concat(zapatillasDama)
            }
          return res.render('search', {
            title: "Resultados",
            usuarioLogeado: req.session.usuarioLogin,
            products : products,
            keywords,
          }
        )
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