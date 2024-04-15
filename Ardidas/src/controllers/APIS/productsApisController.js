const fs = require("fs");
const db = require("../../database/models");
const { Sequelize } = require("../../database/models");
const { validationResult } = require("express-validator");

const apiProductsController = {
  list: async (req, res) => {
    try {
        let { page = 1 } = req.query;
        const limit = 10;

        const offset = (page - 1) * limit;
        const products = await db.Product.findAll(
             {
             limit: limit,
             offset: offset,
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
        const countProducts = await db.Product.count();
        const countCategories = await db.Category_product.count();

        const totalPages = Math.ceil(countProducts / limit);

        let nextPath = null;
        let previousPath = null;

        if (page < totalPages) {
            nextPath = `/api/products/?page=${parseInt(page) + 1}`;
        }

        if (page > 1) {
            previousPath = `/api/products/?page=${parseInt(page) - 1}`;
        }

        const countByCategory = await db.Product.findAll({
            attributes: [
                [db.sequelize.col('Category_products.category'), 'category'], // Capturamos el nombre de la categoría
                [db.sequelize.fn('COUNT', db.sequelize.col('Category_products.category')), 'count']
            ],
            include: [{ 
                association: "Category_products",
                attributes: []
            }],
            group: ['Category_products.category']
        });
        
        let cantidadPorCategoria = {};
        countByCategory.forEach(categoryCount => {
            const categoryName = categoryCount.get('category'); 
            const count = categoryCount.get('count'); 
            cantidadPorCategoria[categoryName] = count;
        });

        let respuesta = {
            meta:{
                status: 200,
                url: "/api/products",
                count: countProducts,
                categories: countCategories,
                countByCategory: cantidadPorCategoria,
                previous: previousPath,
                next: nextPath,
                products: productsMap
            }
        }
        res.json(respuesta)

       
    } 
    catch (error) {
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
