const { setJson, getJson } = require("../utility/jsonMethod");
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');
const session = require('express-session')

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
        let errors = validationResult(req);
        let usuarioLogin
        if (errors.isEmpty()){
            let users = getJson('users')
            for (let i = 0; i < users.length; i++) {
                if (users[i].email.toLowerCase() == req.body.usuario.toLowerCase()) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)) {
                        usuarioLogin = users[i]
                        break;
                        }
                    }
                }
                if (usuarioLogin == undefined) {
                    return res.render('./users/login', {errors: [
                        {msg: 'Credenciales invalidas'}
                    ], title: 'Login'})
    
            }
            req.session.usuarioLogin = usuarioLogin
            if (req.body.recuerdame != undefined) {
                res.cookie('recuerdame',
                usuarioLogin.email,{ maxAge: 120000 })
                console.log('se guardo la cookieeeee')
            }
            res.redirect('/')


        }else{
            return res.render('./users/login', {errors: errors.errors, title:'Login'})
        }
    },

    
    
}
module.exports = usersController;