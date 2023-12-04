const products = [{
    
}]
const indexController = {
    index:(req,res)=>{
        res.render('index',{title:"Ardidas",products})
    },
    login:(req,res)=>{
        res.render('login',{title:"Ardidas",products})
    },
    register:(req,res)=>{
        res.render('register',{title:"Ardidas",products})
    },
    productCart:(req,res)=>{
        res.render('productCart',{title:"Ardidas",products})
    },
    productDetail:(req,res)=>{
        res.render('productDetail',{title:"Ardidas",products})
    },
}
module.exports = indexController