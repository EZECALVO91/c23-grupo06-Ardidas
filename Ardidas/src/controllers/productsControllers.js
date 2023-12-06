const products = [{
    
}]
const productsController ={
    productCart:(req,res)=>{
        res.render('./products/productCart',{title:"Carrito",products})
    },
    productDetail:(req,res)=>{
        res.render('./products/productDetail',{title:"Detalle",products})
    }
}

module.exports = productsController;