const { setJson, getJson } = require("../utility/jsonMethod");
const bcrypt = require("bcryptjs");


const usersController = {
    formRegister:(req,res)=>{
        res.render('./users/register',{title:"Registro"})
    },
    register:(req,res) => {
        const file = req.file
        const user = getJson("users");
        const id = user[user.length - 1].id + 1;

        const { name, email, password } = req.body;

        const newUser = {
            id,
            name,
            email,
            password: bcrypt.hashSync(password, 10),
            category: "ADMIN",
            image: file ? file.filename : "default-avatar-profile.jpg",
        };

        const newJson = [...user, newUser];
        setJson(newJson, "users");
            
        
        res.redirect("/users/login")
    },
    formLogin:(req,res)=>{
            res.render('./users/login',{title:"Login"})
    },
    login: (req,res) => {
        console.log(req.body)
        res.redirect("/")
    },
    
}
module.exports = usersController;