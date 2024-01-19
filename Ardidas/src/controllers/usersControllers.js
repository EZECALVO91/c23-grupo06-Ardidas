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
            res.render('./users/login',{title:"Login", usuarioLogeado: req.session.usuarioLogin})
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
                    ], title: 'Login',usuarioLogeado: req.session.usuarioLogin})
    
            }
            req.session.usuarioLogin = usuarioLogin
            if (req.body.recuerdame != undefined) {
                res.cookie('recuerdame',
                usuarioLogin.email,{ maxAge: 120000 })
                console.log('se guardo la cookieeeee')
            }
            res.redirect('/')


        }else{
            return res.render('./users/login', {errors: errors.errors, title:'Login',usuarioLogeado: req.session.usuarioLogin})
        }
    },
        //Edicion de usuarios
    usersEdit: (req, res) => {
        const { id } = req.params;
        const users = getJson("users");
        const user = users.find(elemento => elemento.id == id);
        res.render("users/usersEdit", { title: "Editar Usuario", user })
    },
    usersUpdate: (req, res) => {
        const { id } = req.params;
        const users = getJson("user");
        const { name, email, password} = req.body;
        const nuevoArray = users.map(product => {
            if (product.id == id)
                return {
                    id: +id,
                    nombre: nombre.trim(),
                    talles: talles >= 1 ? [talles] : talles,
                    color :Array.isArray(color) ? color : [color],
                    precio: +precio,
                    descripcion: descripcion.trim(),
                    imagen: imagen ? imagen : product.imagen,
                    category,
                }

            return product
        })
        setJson(nuevoArray, "product")
        res.redirect(`/products/detalle/${id}`);
    },

    //Dashboard de Usuarios

    UsersDashboard: (req, res) => {
        const users = getJson("users");
        res.render('users/usersDashboard', { title: "Users Dashboard", users });
    },
    
}
module.exports = usersController;