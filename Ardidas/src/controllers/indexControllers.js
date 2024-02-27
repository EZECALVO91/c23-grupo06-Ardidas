
const fs = require('fs')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)
const db = require("../database/models");

const indexController = {
    index:(req,res)=>{
        let ofertas = db.Product.findAll({
            where: { id_category_product: 1 },
            include: [
              {
                association: "Image_products",
                attributes: ["id", "name", "path", "id_product"],
              },
              {
                association: "Category_products",
                attributes: ["id", "category"],
              }, 
            ],
            limit: 3, 
          });
          let destacados = db.Product.findAll({
            where: { id_category_product: 2 },
            include: [
              {
                association: "Image_products",
                attributes: ["id", "name", "path", "id_product"],
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
    }
}
module.exports = indexController