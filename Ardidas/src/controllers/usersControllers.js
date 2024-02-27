const fs = require('fs')
const { setJson, getJson } = require("../utility/jsonMethod");
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');
const db = require("../database/models");
const { Op } = require("sequelize");


const usersController = {

    //Logout
    logout:(req,res)=>{
        req.session.destroy();
        if (req.cookies.recuerdame) {
        res.clearCookie('user');
        res.clearCookie('recuerdame');
        }
        res.redirect('/');
    },

    // Registro
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
        const { name, email, password, id_category,} = req.body;
        db.User.create({
            name,
            email,
            password: bcrypt.hashSync(password,10),
            image: file ? file.filename : "default-avatar-profile.jpg",
            id_category:2,
            createdAt:new Date,
            updatedAt:new Date
        }).then(()=>{
            res.redirect("/users/login")
        })
    }
    },

    formLogin:(req,res)=>{
            res.render('./users/login',{title:"Login", usuarioLogeado: req.session.usuarioLogin})
    },

    login: (req, res) => {
        const errores = validationResult(req);
        
    
        if (!errores.isEmpty()) {
        console.log("errores:", errores.mapped());
        res.render('./users/login', {errores:errores.mapped(), title:"Login",usuarioLogeado: req.session.usuarioLogin});
        } else {
        const { email } = req.body;
        db.User.findOne({
            attributes: { exclude: ["password"] },
            where: {
            email,
            },
        })
            .then((user) => {
                console.log("user info:", user);
            req.session.usuarioLogin = user.dataValues;
    
                if (req.body.recuerdame == "true") {
                res.cookie("user", user.dataValues, { maxAge: 1000 * 60 * 15 });
                res.cookie("recuerdame", "true", { maxAge: 1000 * 60 * 15 });
                }
    
                res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },

    //Dashboard de Usuarios

    UsersDashboard: (req, res) => {
        db.User.findAll({
            where: {
            id: { [Op.ne]: req.session.usuarioLogin.id },
            }
        })
            .then((users) => {
            console.log('dashboard users', users);
            console.log('dashboard users', users);
            res.render('users/usersDashboard', {
                title: 'Dashboard',
                users: users,
                usuarioLogeado: req.session.usuarioLogin,
            });
         })
        .catch((err) => console.log(err));
      },

    //Dashboar crear usuarios con provilegios
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

    // Dashboard edicion de usuarios
    usersEdit: (req, res) => {
        const { id } = req.params;
        const users = getJson("users");
        const user = users.find(elemento => elemento.id == id);
        res.render("users/usersEdit", { title: "Editar Usuario", user, usuarioLogeado: req.session.usuarioLogin })
    },

    usersUpdate: (req, res) => {
        const { id } = req.params;
        const products = getJson("users");
        const {name,email,password,category,date,localidad,sobremi} = req.body;
        const userEdit = products.map(element => {
            if (element.id == id){
                return{
                    id:+id,
                    name:name.trim(),
                    email:email.trim(),
                    password:password ? password : element.password ,
                    category: category ? category : element.category,
                    date:date ? date : element.date, 
                    localidad: localidad ? localidad : element.localidad,
                    sobremi:sobremi ? sobremi : element.sobremi ,
                    image:req.file ? req.file.filename : element.image,
                }
            }
            return element
        })
        setJson(userEdit, "users")
        res.redirect(`/users/update/${id}`);
    },
    

    // Profile para que el usuario pueda editar y/o agregar informacion a su Base de DATOS.
    userProfile:(req, res) => {
        const { id } = req.params;

        db.User.findByPk(req.session.usuarioLogin.id)
        .then((response) => {
                    res.render("users/profileEdit", { title: "Editar Usuario", user: response.dataValues, usuarioLogeado: req.session.usuarioLogin })
        }).catch((err) => console.log(err));
    },

    userProfileEdit: (req, res) =>{
        const errores = validationResult(req);
        if(!errores.isEmpty()){
            
            res.render('users/profileEdit',{errores:errores.mapped(), old:req.body, title:"Error", usuarioLogeado: req.session.usuarioLogin})
        }else{
            const { id } = req.params;
            const {name,category,date,locality,aboutMe,image} = req.body;
            const file = req.file;

                db.User.update({
                    name,
                    category,
                    date:date,
                    locality: locality.trim(),
                    aboutMe: aboutMe.trim(),
                    image: file ? file.filename : image,
                    createdAt:new Date,
                    updatedAt:new Date
                },
                {
                    where:{id}
            }
            ).then((user) => {
                // res.redirect(`users/profileEdit/${id}`);

        //         db.User.findOne(user)
        // .then((user) => {
        //     res.redirect(`users/profileEdit/${id}`);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
                
                req.session.usuarioLogin = user.dataValues;
                res.cookie("user",user.dataValues, { maxAge: 1000 * 60 * 15 });
                res.redirect(`users/profileEdit/${id}`)
                // res.render(`users/profileEdit`,{title:"Profile", usuarioLogeado:user.dataValues})
                

                // res.render(`users/profileEdit/${id}`,{title:"User Profile", usuarioLogeado : req.session.usuarioLogin})

                setJson(usuarios, "users")
                const editarUsuario = usuarios.find(element => element.id == id);
                req.session.user = editarUsuario;
                res.cookie("user", {name:editarUsuario.name,image:editarUsuario.image, email:editarUsuario.email, id:editarUsuario.id},{maxAge: 1000 * 0 * 15})
                res.redirect(`/`)


            })
            .catch((err) => console.log(err));
        }
    },



    // Borrar usuario del DASHBOARD
    
    destroy: (req, res) => {
        const { id } = req.params;
        const users = getJson("users");

        let user = users.find(user => user.id == id);
        let usersClear = users.filter(user => user.id !== +req.params.id);
        if (user.image == "default-avatar-profile.jpg") {
            setJson(usersClear, "users");
            res.redirect('/users/dashboard')
        } else {
        fs.unlink(`./public/images/users/${user.image}`, (err) => {
            if (err) throw err
            console.log(`borre el archivo ${user.image}`)
        })
            setJson(usersClear, "users");
            res.redirect('/users/dashboard')
        
    }
    },
    
}




module.exports = usersController;