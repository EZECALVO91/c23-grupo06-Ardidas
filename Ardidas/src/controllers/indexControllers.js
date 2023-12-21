
const fs = require('fs')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)
const indexController = {
    index:(req,res)=>{
        const featuredCategory = products.filter(product => product.category === "destacado")
        res.render('index',{title:"Ardidas",products, featuredCategory})
    }
}
module.exports = indexController