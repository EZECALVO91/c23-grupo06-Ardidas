const db = require("../../database/models");

const dashboardAPI = {
  DashboardReactVite: async (req, res) => {
    try {
      const ultimoProductoPromise = db.Product.findOne({
        include: [{ association: "Image_products" }],
        order: [["createdAt", "DESC"]],
      });

      const categoriesPromise = db.Category_product.findAll({
        include: [
          {
            model: db.Product,
            as: "Products",
            attributes: ["id", "name"],
          },
        ],
      });

      const productsPromise = db.Product.findAll();
      const productsCountPromise = fetch("http://localhost:3000/api/products")
        .then((response) => response.json())
        .then((data) => data.meta.count);

      const usersCountPromise = fetch("http://localhost:3000/api/allUsers")
        .then((response) => response.json())
        .then((data) => data.meta.count);

      const [
        ultimoProducto,
        categories,
        products,
        productsCount,
        usersCount,
      ] = await Promise.all([
        ultimoProductoPromise,
        categoriesPromise,
        productsPromise,
        productsCountPromise,
        usersCountPromise,
      ]);

      let categoriaConMasProductos;
      let maximoProductos = 0;

      categories.forEach((category) => {
        if (category.Products.length > maximoProductos) {
          maximoProductos = category.Products.length;
          categoriaConMasProductos = category;
        }
      });

      const categoriesCount = categories.length;

      res.json({
        title: "Dashboard",
        productsCount: productsCount,
        usersCount: usersCount,
        categoriesCount: categoriesCount,
        product: ultimoProducto,
        maxCategories: categoriaConMasProductos,
        categories: categories,
        products: products,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Error en el panel de control." });
    }
  },
};

module.exports = dashboardAPI;
