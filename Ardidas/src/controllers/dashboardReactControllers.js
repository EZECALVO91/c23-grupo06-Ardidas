const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");

const usersController = {
// ---------------ACA EMPIEZA EL DASHBOARD DE REACT--------------------------------------------------------------------------------------------------------------

// DashboardReact:  async (req, res) => {
//     try {
//         const ultimoProducto = await db.Product.findOne({
//             include: [{
//                 association: "Image_products"
//             }],
//             order: [['createdAt', 'DESC']],
//         });

//         if (!ultimoProducto) {
//             return res.status(404).send("No se encontraron productos.");
//         }

//         res.render("./dashboardReact/dashboardReact", {title: "Último Producto",usuarioLogeado: req.session.usuarioLogin,product: ultimoProducto,});
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Ocurrió un error al cargar el último producto.");
//     }
// },

// DashboardReact : async (req, res) => {
//     try {
//         const ultimoProducto = await db.Product.findOne({
//             include: [{
//                 association: "Image_products"
//             }],
//             order: [['createdAt', 'DESC']],
//         });

//         const categories = await db.Category_product.findAll({
//             include: [{
//                 model: db.Product,
//                 as: 'Products', // Utilizamos el alias definido en la asociación
//                 attributes: ['id', 'name']
//             }]
//         });

//         res.render("./dashboardReact/dashboardReact", {
//             title: "Dashboard",usuarioLogeado: req.session.usuarioLogin,product: ultimoProducto,categories: categories
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Ocurrió un error al cargar el panel de control.");
//     }
// },


DashboardReact : async (req, res) => {
    try {
        const ultimoProducto = await db.Product.findOne({
            include: [{
                association: "Image_products"
            }],
            order: [['createdAt', 'DESC']],
        });
        const categories = await db.Category_product.findAll({
                        include: [{
                            model: db.Product,
                            as: 'Products',
                            attributes: ['id', 'name']
                    }]
            });

            const products = await db.Product.findAll();

        let categoriaConMasProductos;
        let maximoProductos = 0;

        categories.forEach(category => {
            if (category.Products.length > maximoProductos) {
                maximoProductos = category.Products.length;
                categoriaConMasProductos = category;
            }
        });
        res.render("./dashboardReact/dashboardReact", {title: "Dashboard",usuarioLogeado: req.session.usuarioLogin,product: ultimoProducto, categories: categories, maxCategories: categoriaConMasProductos, products:products
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en el panel de control.");
    }

},


}


module.exports = usersController;
