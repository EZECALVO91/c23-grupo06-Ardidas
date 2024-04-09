const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");

const usersController = {
// ---------------ACA EMPIEZA EL DASHBOARD DE REACT--------------------------------------------------------------------------------------------------------------
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

                // ACA CONSUMO LA API DE USER PARA UTILIZAR EL COUNT Y SABER CUANTOS USUARIOS EXISTEN.
                const usersCount = await fetch('http://localhost:3001/api/allUsers');
                const countApi = await usersCount.json();
                const allUsers = countApi.meta.count;

        res.render("./dashboardReact/dashboardReact", {title: "Dashboard",
        usuarioLogeado: req.session.usuarioLogin,
        product: ultimoProducto,
        categories: categories,
        maxCategories: categoriaConMasProductos,
        products:products,
        count:allUsers
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en el panel de control.");
    }

},


}


module.exports = usersController;
