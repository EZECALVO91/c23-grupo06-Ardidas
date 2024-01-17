const { setJson, getJson } = require("../utility/jsonMethod");
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');


const usersController = {
    formRegister:(req,res)=>{
        res.render('./users/register',{title:"Registro"})
        
    },
    register:(req,res) => {
        const errores = validationResult(req);

        console.log("errores:", errores);
  
        if(!errores.isEmpty()){
          console.log("Ingrese en errores");
          res.render('./users/register',{errores:errores.mapped(),old:req.body,title:"registro"})
        }
        else{
            
        const file = req.file
        const user = getJson("users");
        const idnew = Date.now();

        const { name, email, password } = req.body;

        const newUser = {
            id:+idnew,
            name: name.trim(),
            email:email.trim(),
            password: bcrypt.hashSync(password,10),
            category: "ADMIN",
            image: file ? file.filename : "default-avatar-profile.jpg",
        };

        const newJson = [...user, newUser];
        setJson(newJson, "users");
            
        
        res.redirect("/users/login")
         }
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