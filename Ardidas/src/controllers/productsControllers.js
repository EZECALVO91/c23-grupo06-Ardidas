const fs = require("fs")
const path = require('path');
const dir = path.join(__dirname, "/..","/database","/product.json");


const productsController ={
    productCart:(req,res)=>{
        res.render('./products/productCart.ejs',{title:"Ardidas"})
    },
    productDetail:(req,res)=>{
        res.render('./products/productDetail',{title:"Ardidas"})
    },



    productEdit:(req, res) => {
        const id = req.params.id;        
        const productosJson = fs.readFileSync(dir,"utf-8");
        const products = JSON.parse(productosJson);
        const product = products.find(elemento => elemento.id == id);
        res.render("./products/productEdit", {title:"Detalle producto",product})
        
    }
}

module.exports = productsController;