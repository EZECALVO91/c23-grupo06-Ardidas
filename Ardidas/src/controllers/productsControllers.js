const fs = require('fs')
const { setJson, getJson } = require("../utility/jsonMethod");


const productsController = {
    index: (req, res) => {
        const products = getJson("product");
        res.render("products/products", { title: "Ardidas", products, usuarioLogeado: req.session.usuarioLogin})
    },
    productCart: (req, res) => {
        const { id } = req.params
        const products = getJson("product");
        const product = products.find(producto => producto.id == id)
        res.render('products/productCart', { title: "Carrito", product,usuarioLogeado: req.session.usuarioLogin })
    },
    productDetail: (req, res) => {
        const products = getJson("product");
        const { id } = req.params
        const product = products.find(producto => producto.id == id)
        const productOff = products.filter(product => product.category === "oferta")
        res.render('products/productDetail', { title: "Detalle", product, productOff,usuarioLogeado: req.session.usuarioLogin })
    },
    dashboard: (req, res) => {
        const products = getJson("product");
        res.render('products/dashboard', { title: "Dashboard", products,usuarioLogeado: req.session.usuarioLogin });
    },
    productLoad: (req, res) => {
        res.render("products/productLoad", { title: "Crear",usuarioLogeado: req.session.usuarioLogin });
    },
    create: (req, res) => {
        const file = req.file
        const products = getJson("product");
        const Nuevaid = Date.now();
        const { nombre, talles, color, precio, descripcion, category  } = req.body;
        console.log("Que llega?: " , req.body.color)
        let nuevoJson = {
            id: +Nuevaid,
            nombre: nombre.trim(),
            talles: talles >= 1 ? [talles] : talles,
            color: Array.isArray(color) ? color : [color] ,
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
        res.render("products/productEdit", { title: "Editar producto", product,usuarioLogeado: req.session.usuarioLogin })
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
                    talles: talles >= 1 ? [talles] : talles,
                    color :Array.isArray(color) ? color : [color],
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
        if (product.imagen == "default-image.png") {
            setJson(productClear, "product");
            res.redirect('/products/dashboard')
        } else {
        fs.unlink(`./public/images/products/${product.imagen}`, (err) => {
            if (err) throw err
            console.log(`borre el archivo ${product.image}`)
          })
          setJson(productClear, "product");
          res.redirect('/products/dashboard')
          
    }
    }
}

module.exports = productsController;