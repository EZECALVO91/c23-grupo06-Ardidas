const fs = require('fs')
const path = require ('path')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)

const reutilizarJson = () => {
    const productsFilePath = path.join(__dirname, '../database/product.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}
const setJson = (array,fileName) => {
    const json = JSON.stringify(array);
    fs.writeFileSync(`${__dirname}/../database/${fileName}.json`,json,"utf-8")
}


const productsFilePath = path.join(__dirname, '../database/product.json');


const productsController ={
    //Este metodo hay que editarlo, Esteban. 
    index: (req, res) => {
        res.render("products/products",{title:"Ardidas",products})
    },
    productCart:(req,res)=>{
        const {id} = req.params
        const product = products.find(producto => producto.id == id)
        res.render('products/productCart',{title:"Carrito", product})
    },
    productDetail:(req,res)=>{
        const {id} = req.params
        const product = products.find(producto => producto.id == id)
        res.render('products/productDetail',{title: "Detalle" ,product})
    },
    
    dashboard:(req, res) => {
        res.render('products/dashboard', { title: "Dashboard", products });
    },
    productLoad: (req,res)=>{
        res.render("products/productLoad",{ title: "Crear"});
    },
    
    create: (req,res)=>{
          const file = req.file
          console.log("1er paso :", file)
          const archivoJson = reutilizarJson();
          console.log("2do paso :", archivoJson)
          const Nuevaid = Date.now();
          const {nombre, talles, descripcion, precio, category, color} = req.body;

          let nuevoJson = {
             id: +Nuevaid,
             nombre: nombre.trim(),
             talles,
             descripcion: descripcion.trim(),
             precio: +precio,
             imagen: file ? file.filename : "default-image.png",
             category,
             color
          }
          let productoNuevo = [...archivoJson, nuevoJson]
          setJson(productoNuevo, "product");
          res.redirect("/products");
    
    },

    productEdit:(req, res) => {
         const {id} = req.params;        
        // const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
        // const products = JSON.parse(productsJson);
         const product = products.find(elemento => elemento.id == id);
        res.render("products/productEdit", {title:"Detalle producto",product})
        
    },

    destroy:(req, res) => {
		const products = reutilizarJson();
		let productClear = products.filter(product => product.id !== +req.params.id);
		const json = JSON.stringify(productClear);
		fs.writeFileSync(productsFilePath,json, "utf-8");
		res.redirect ('/products/dashboard')
	}
}

module.exports = productsController;