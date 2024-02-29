
const db = require("../database/models");
const { Sequelize } = require("../database/models");

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
    }
}
module.exports = indexController