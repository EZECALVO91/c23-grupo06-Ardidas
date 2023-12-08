
const fs = require('fs')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)
const indexController = {
    index:(req,res)=>{
        res.render('index',{title:"Ardidas",products})
    }
}
module.exports = indexController