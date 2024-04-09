const db = require("../database/models");

const dashboardController = {
    DashboardReact: async (req, res) => {
        try {
            const ultimoProducto = await db.Product.findOne({
                include: [{ association: "Image_products" }],
                order: [["createdAt", "DESC"]],
            });

            const categories = await db.Category_product.findAll({
                include: [
                    {
                        model: db.Product,
                        as: "Products",
                        attributes: ["id", "name"],
                    },
                ],
            });

            const products = await db.Product.findAll();

            let categoriaConMasProductos;
            let maximoProductos = 0;

            categories.forEach((category) => {
                if (category.Products.length > maximoProductos) {
                    maximoProductos = category.Products.length;
                    categoriaConMasProductos = category;
                }
            });

            // le pido a la api que me envie el count de los productos con la api
            const productsCountResponse = await fetch("http://localhost:3000/api/products");
            const productsCountData = await productsCountResponse.json();
            const allProductsCount = productsCountData.meta.count;

            // le pido a la api que me envie el count de los usuarios con la api
            const usersCountResponse = await fetch("http://localhost:3000/api/allUsers");
            const usersCountData = await usersCountResponse.json();
            const allUsers = usersCountData.meta.count;

            
            const categoriesCount = categories.length;// count de categorías

            res.render("./dashboardReact/dashboardReact", {
                title: "Dashboard",
                usuarioLogeado: req.session.usuarioLogin,
                product: ultimoProducto,
                categories: categories,
                maxCategories: categoriaConMasProductos,
                products: products,
                productsCount: allProductsCount,
                usersCount: allUsers,
                categoriesCount: categoriesCount,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send("Hubo un error en el panel de control.");
        }
    },
};

module.exports = dashboardController;

