const db = require("../../database/models");

const dashboardAPI = {
  DashboardReactVite: async (req, res) => {
    try {
      const ultimoProductoPromise = db.Product.findOne({
        include: [{ association: "Image_products" }],
        order: [["id", "DESC"]], //PEDIMOS QUE SE ORDENEN POR FECHA DE CREACION PARA
        // QUE EL ULTIMO CREADO SE MUESTE EN EL DASHBOARD
      });

      const categoriesPromise = db.Category_product.findAll({//crea una promesa para encontrar todas las categorias de productos en la base de datos.
        include: [
          {
            model: db.Product,
            as: "Products",
            attributes: ["id", "name"],
          },
        ],
      });

      //ACA UTILIZAMOS LAS APIS QUE CREAMOS ANTERIORMENTE PARA PODER SABER LOS COUNT DE AMBAS COSAS
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
      ] = await Promise.all([ // promesa para esperar a que todas las promesas se resuelvan.
        ultimoProductoPromise,
        categoriesPromise,
        productsPromise,       //Cuando todas las promesas se cumplieron, le agrega los valores resueltos a las variables que le corresponden.
        productsCountPromise,
        usersCountPromise,
      ]);

      let categoriaConMasProductos;
      let maximoProductos = 0;//maximoProductos se setea 0 y despues se actualiza si una categoría tiene mas productos que el maximo actual.

      categories.forEach((category) => {
        if (category.Products.length > maximoProductos) {
          maximoProductos = category.Products.length;
          categoriaConMasProductos = category; //Esto recorre todas las categorías para encontrar la categoría con la mayor cantidad de productos. 
        }
      });

      const categoriesCount = categories.length; //el .lenght nos calcula cuantas categorias existen dentro.

      res.json({ //RESPUESTA CON FORMATO JSON PARA QUE EL POSTMAN PUEDA INTERPRETARLO.
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
      res.status(404).json({ error: "Error en el panel de control." }); //Catch por si surge un erro este lo captura.
    }
  },
};

module.exports = dashboardAPI;
