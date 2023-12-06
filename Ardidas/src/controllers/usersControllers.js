
const usersController = {
    formRegister:(req,res)=>{
        res.render('./users/register',)
    },
    register:(req,res) => {
        console.log(req.body)
        res.redirect("/users/login")
    },
    formLogin:(req,res)=>{
            res.render('./users/login',)
    },
    login: (req,res) => {
        console.log(req.body)
        res.redirect("/")
    },
    
}
module.exports = usersController;