const fs = require('fs')
const { setJson, getJson } = require("../utility/jsonMethod");


const productsController = {
    index: (req, res) => {
        const products = getJson("product");
        res.render("products/products", { title: "Ardidas", products })
    },
    productCart: (req, res) => {
        const { id } = req.params
        const products = getJson("product");
        const product = products.find(producto => producto.id == id)
        res.render('products/productCart', { title: "Carrito", product })
    },
    productDetail: (req, res) => {
        const products = getJson("product");
        const { id } = req.params
        const product = products.find(producto => producto.id == id)
        const productOff = products.filter(product => product.category === "oferta")
        res.render('products/productDetail', { title: "Detalle", product, productOff })
    },
    dashboard: (req, res) => {
        const products = getJson("product");
        res.render('products/dashboard', { title: "Dashboard", products });
    },
    productLoad: (req, res) => {
        res.render("products/productLoad", { title: "Crear" });
    },
    create: (req, res) => {
        const file = req.file
        const products = getJson("product");
        const Nuevaid = Date.now();
        const { nombre, talles, color, precio, descripcion, category  } = req.body;

        let nuevoJson = {
            id: +Nuevaid,
            nombre: nombre.trim(),
            talles,
            color: color,
            precio: +precio,
            descripcion: descripcion.trim(),
            imagen: file ? file.filename : "default-image.png",
            category,
            
        }
        let productoNuevo = [...products, nuevoJson]
        setJson(productoNuevo, "product");
        res.redirect("/products/dashboard");
    },
    productEdit: (req, res) => {
        const { id } = req.params;
        const products = getJson("product");
        const product = products.find(elemento => elemento.id == id);
        res.render("products/productEdit", { title: "Detalle producto", product })
    },
    update: (req, res) => {
        const { id } = req.params;
        const products = getJson("product");
        const { nombre, precio, descripcion, imagen, category, talles, color } = req.body;
        const nuevoArray = products.map(product => {
            if (product.id == id)
                return {
                    id: +id,
                    nombre: nombre.trim(),
                    talles,
                    color,
                    precio: +precio,
                    descripcion: descripcion.trim(),
                    imagen: imagen ? imagen : product.imagen,
                    category,
                }

            return product
        })
        setJson(nuevoArray, "product")
        res.redirect(`/products/detalle/${id}`);
    },
    destroy: (req, res) => {
        const { id } = req.params;
        const products = getJson("product");

        let product = products.find(product => product.id == id);
        let productClear = products.filter(product => product.id !== +req.params.id);
        fs.unlink(`./public/images/products/${product.imagen}`, (err) => {
            if (err) throw err
            console.log(`borre el archivo ${product.image}`)
          })
          setJson(productClear, "product");
        res.redirect('/products/dashboard')
    }
}

module.exports = productsController;