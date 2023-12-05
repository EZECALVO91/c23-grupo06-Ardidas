const products = [{
    
}]
const indexController = {
    index:(req,res)=>{
        res.render('index',{title:"Ardidas",products})
    }
}
module.exports = indexController