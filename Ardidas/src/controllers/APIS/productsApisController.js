const fs = require("fs");
const db = require("../../database/models");
const { Sequelize } = require("../../database/models");
const { validationResult } = require("express-validator");

const apiProductsController = {
  list: async (req, res) => {
    try {
        const products = await db.Product.findAll(
             {
             include: [{ 
               association: "Category_products"}],
           }
        );
        const productsMap = products.map(product => {
            const productModificado = { ...product.toJSON()}
             delete productModificado.color
             delete productModificado.price
             delete productModificado.createdAt
             delete productModificado.updatedAt
             delete productModificado.id_category_product
             delete productModificado.Category_products.createdAt
             delete productModificado.Category_products.updatedAt
             productModificado.detail = `/api/products/${productModificado.id}`
            return productModificado
        })
        const countProducts = productsMap.length

        const cantidadPorCategoria = {};
        products.forEach(product => {
            const categoryName = product.Category_products.category;
            cantidadPorCategoria[categoryName] = (cantidadPorCategoria[categoryName] || 0) + 1;
        });

        let respuesta = {
            meta:{
                status: 200,
                url: "/api/products",
                count: countProducts,
                countByCategory: cantidadPorCategoria,
                products: productsMap
            }
        }
        res.json(respuesta)

       
    } catch (error) {
        const respuestaError = {
            meta:{
                status: 404,
                url: "/api/products",
                error: "Error en el Servidor",
            }
        };
        console.log(error);
        res.status(500).json(respuestaError);
    }
  },

  detail: async (req, res) => {
    try {
        const {id} = req.params;
        const product = await db.Product.findByPk(id,{
             include: [
                { 
                    association: "Image_products",
                    attributes: { exclude: ["id", "createdAt", "updatedAt", "id_product"] } },
               {
                 association: "Category_products",
                 attributes: { exclude: ["id", "createdAt", "updatedAt"] },},
                {
                    association: "Sizes",
                    attributes: { exclude: ["id", "createdAt", "updatedAt"] },}],
           }
        );
        
          let respuesta = {
            meta: {
                status: 200,
                url: `/api/products/${id}`,
                product: { ...product.toJSON()},
                url_image: `http://localhost:3000/images/products/${product.Image_products[0].filename}`
            }
            
          }
          res.json(respuesta)
          
    } catch (error) {
        const {id} = req.params;
        const respuestaError = {
            meta:{
                status: 404,
                url: `/api/products/${id}`,
                error: `No existe un producto con ID ${id}`,
            }
        };
        res.status(500).json(respuestaError);
    }
    
  },


};

module.exports = apiProductsController;
