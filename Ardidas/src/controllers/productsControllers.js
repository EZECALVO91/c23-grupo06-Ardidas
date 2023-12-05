const products = [{
    
}]
const productsController ={
    productCart:(req,res)=>{
        res.render('./products/productCart.ejs',{title:"Ardidas",products})
    },
    productDetail:(req,res)=>{
        res.render('./products/productDetail',{title:"Ardidas",products})
    }
}

module.exports = productsController;