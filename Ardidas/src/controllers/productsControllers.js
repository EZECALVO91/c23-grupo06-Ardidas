const fs = require('fs')
const path = require ('path')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)

const reutilizarJson = () => {
    const productsFilePath = path.join(__dirname, '../database/product.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}

const productsFilePath = path.join(__dirname, '../database/product.json');


const productsController ={
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
        // const product = req.body;
        // console.log(product). 
        // product.id = products[products.length-1].id +1;
        // products.push(product);
        // const productjson = JSON.stringify(products);
        // fs.writeFileSync(path.join(__dirname,"../database/product.json"),productjson,"utf-8");
        // res.redirect("/products/dashboard")
        res.redirect('products/dashboard', { title: "Dashboard" });
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