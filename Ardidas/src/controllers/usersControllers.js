const fs = require('fs')
const { setJson, getJson } = require("../utility/jsonMethod");
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');
const session = require('express-session')


const usersController = {
    formRegister:(req,res)=>{
        res.render('./users/register',{title:"Registro", usuarioLogeado: null})
        
    },
    register:(req,res) => {
        const errores = validationResult(req);

        console.log("errores:", errores);

        if(!errores.isEmpty()){
          console.log("Ingrese en errores");
          res.render('./users/register',{errores:errores.mapped(),old:req.body,title:"registro", usuarioLogeado:null})
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
            category:"USER",
            date:"",
            localidad:"",
            sobremi:"",
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
        res.render("users/usersEdit", { title: "Editar Usuario", user, usuarioLogeado: req.session.usuarioLogin })
    },
    usersUpdate: (req, res) => {
        const { id } = req.params;
        const products = getJson("users");
        const { name, email, password, category ,image } = req.body;
        const editUser = products.map(user => {
            if (user.id == id)
                return {
                    id,
                    name: name ? name : user.name,
                    email: email,
                    password: password,
                    category: category ? category : "USUARIO",
                    date:"",
                    localidad:"",
                    sobremi:"",
                    imagen: image ? image : user.image,
                    
                   
                }

            return user
        })
        setJson(editUser, "users")
        res.redirect(`/`);
    },

    
    //Dashboard de Usuarios

    UsersDashboard: (req, res) => {
        const users = getJson("users");
        res.render('users/usersDashboard', { title: "Users Dashboard", users, usuarioLogeado: req.session.usuarioLogin });
    },



    createPrivileges:(req, res)=> {
        const users = getJson("users");
        res.render('users/userCreatePrivi', { title: "Users Privileges", users, usuarioLogeado: req.session.usuarioLogin });
    },
    createUserPrivileges: (req, res) =>{
        const errores = validationResult(req);

        console.log("errores:", errores);

        if(!errores.isEmpty()){
            console.log("Ingrese en errores");
            res.render('users/userCreatePrivi',{errores:errores.mapped(), old:req.body, title:"Errores Privilegios", usuarioLogeado: req.session.usuarioLogin})
        }
        else{
            
        const file = req.file
        const user = getJson("users");
        const idPriv = Date.now();

        const { name, email, password, category } = req.body;

        const userPriv = {
            id:+idPriv,
            name:name.trim(),
            email:email.trim(),
            password: bcrypt.hashSync(password,10),
            category,
            date:"",
            localidad:"",
            sobremi:"",
            image: file ? file.filename : "default-avatar-profile.jpg",
        };

        const userPrivi = [...user, userPriv];
        setJson(userPrivi, "users");
        res.redirect('dashboard')
        }
    },

    
    userProfile:(req, res) =>{
        const { id } = req.params;
        const users = getJson("users");
        const user = users.find(elemento => elemento.id == id);
        res.render("users/profileEdit", { title: "Editar Usuario", user, usuarioLogeado: req.session.usuarioLogin })
    },
    userProfileEdit: (req, res) =>{
        const {id} =req.params;
        console.log("me esta trayendo", req.params.id);
        const {name,email,password, date, localidad,sobremi} = req.body;
        console.log("lo que trae por body", req.body);
        const users = getJson("users");
        const usuarios = users.map(element => {
            if (element.id == id){
                return{
                    id:+id,
                    name:name.trim(),
                    email:email.trim(),
                    password,
                    category:"USER",
                    date,
                    localidad:localidad.trim(),
                    sobremi: sobremi.trim(),
                    image:req.file ? req.file.filename : element.image,
                }
            }
            return element
        })
        
        setJson(usuarios, "users")
        const editarUsuario = usuarios.find(element => element.id == id);
        console.log("usuario",editarUsuario);
        req.session.user = editarUsuario;
        console.log("esto me tendria que llegar al json", req.session.user);
        res.cookie("user", {name:editarUsuario.name,image:editarUsuario.image, email:editarUsuario.email, id:editarUsuario.id},{maxAge: 1000 * 0 * 15})
        res.redirect(`/users/profile/${id}`)
    },



    // Borrar usuario del DASHBOARD
    
    destroy: (req, res) => {
        const { id } = req.params;
        const users = getJson("users");

        let user = users.find(user => user.id == id);
        let usersClear = users.filter(user => user.id !== +req.params.id);
        if (user.image == "default-avatar-profile.jpg") {
            setJson(usersClear, "users");
            res.redirect('/users/dashboard', { usuarioLogeado: req.session.usuarioLogin})
        } else {
        fs.unlink(`./public/images/users/${user.image}`, (err) => {
            if (err) throw err
            console.log(`borre el archivo ${user.image}`)
        })
            setJson(usersClear, "users");
            res.redirect('users/dashboard')
        
    }
    },


    //Cerrar Sesion "LOGAUT"
    
    logaut: (req, res)=>{

    }
    
}
module.exports = usersController;