const products = [{
    
}]
const usersController = {
    login:(req,res)=>{
        res.render('./users/login',{title:"Ardidas",products})
    },
    register:(req,res)=>{
        res.render('./users/register',{title:"Ardidas",products})
    }
}
module.exports = usersController;