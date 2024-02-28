const fs = require('fs')
const path = require('path');
const bcrypt = require("bcryptjs");
const {validationResult} = require('express-validator');
const db = require("../database/models");
const { Op } = require("sequelize");


const usersController = {

// -------------------REGISTER----------------------------------------------------------------------------------------------------------

    formRegister:(req,res)=>{  // vista del formulario de registro.
        res.render('./users/register',{title:"Registro", usuarioLogeado: null})
        
    },
    register:(req,res) => {  // registro directo a la base de datos.

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
        })
        .then(()=>{
            res.redirect("/users/login")
        })
    }
    },

// -------------------LOGIN----------------------------------------------------------------------------------------------------------

    formLogin:(req,res)=>{  // vista de formulario de login.
            res.render('./users/login',{title:"Login", usuarioLogeado: req.session.usuarioLogin})
    },

    login: (req, res) => {  // logueo de cuenta mas cookis para guardar en las vistas.
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
                const cookieUser = {id: user.dataValues.id, email: user.dataValues.email, id_category:user.dataValues.id_category, image:user.dataValues.image}
                    res.cookie("user", cookieUser, { maxAge: 1000 * 60 * 15 });
                    res.cookie("recuerdame", "true", { maxAge: 1000 * 60 * 15 });
                }
                res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },

// -------------------LOGOUT----------------------------------------------------------------------------------------------------------

logout:(req,res)=>{  // desloguea la sesion y termina todas las cookis.
    req.session.destroy();
    if (req.cookies.recuerdame) {
    res.clearCookie('user');
    res.clearCookie('recuerdame');
    }
    res.redirect('/');
},

// -----------PROFILE USUARIO------------------------------------------------------------------------------------------------------------------

userProfile:(req, res) => {  // vista del formulario para que el usuario pueda editar su perfil.
    const { id } = req.params;

    db.User.findByPk(req.session.usuarioLogin.id)
    .then((response) => {
                res.render("users/profileEdit", { title: "Editar Usuario", usuarioLogeado: response.dataValues })
    }).catch((err) => console.log(err));

},

userProfileEdit: (req, res) =>{  // el usuario puede editar su propio perfil.
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
        ).then(() => {
                res.redirect(`/users/profile/${id}`);
            })
        .catch((err) => console.log(err));
    }
},

// ---------------ACA EMPIEZA EL DASHBOARD--------------------------------------------------------------------------------------------------------------

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
    createPrivileges:(req, res)=> {  // vista de la creacion de usuario desde el dashboard.
        res.render('users/userCreatePrivi', { title: "Users Privileges", usuarioLogeado: req.session.usuarioLogin });
    },

    createUserPrivileges: (req, res) =>{  // creacion de usuarios desde el dashboard.
        const errores = validationResult(req);

        console.log("errores:", errores);

        if(!errores.isEmpty()){
            console.log("Ingrese en errores");
            res.render('users/userCreatePrivi',{errores:errores.mapped(), old:req.body, title:"Errores Privilegios", usuarioLogeado: req.session.usuarioLogin})
        }
        else{
            
        const file = req.file
        const { name, email, password, id_category } = req.body;

        db.User.create({
            name,
            email,
            password: bcrypt.hashSync(password,10),
            image: file ? file.filename : "default-avatar-profile.jpg",
            id_category,
            createdAt:new Date,
            updatedAt:new Date
            })
                .then(()=>{
                    res.redirect('dashboard')
            })
        }
    },

    
    usersEdit: (req, res) => {   // vista de edicion de usuario desde el dashboard.

        const { id } = req.params;
        db.User.findByPk(req.params.id)
        .then((user) => {
            res.render("users/usersEdit", { title: "Editar Usuario", user, usuarioLogeado: req.session.usuarioLogin })
        })
        .catch((err) => console.log(err));
        
    },

    usersUpdate: (req, res) => {   // edicion de usuario desde el dashboard.
        const errores = validationResult(req);
        console.log("errores:", errores)
        
        const { id } = req.params;
        db.User.findByPk(req.params.id)
        .then((user) => {
        if(!errores.isEmpty()){
            console.log("Ingrese en errores");
            res.render("users/usersEdit", {errores:errores.mapped(), old:req.body, title: "Editar Usuario", user, usuarioLogeado: req.session.usuarioLogin })
        }else{
            const { id } = req.params;
        const {name, image, id_category} = req.body;
        const file = req.file;
            db.User.update({
                name,
                id_category,
                image: file ? file.filename : image,
                createdAt:new Date,
                updatedAt:new Date
        },
        {
            where:{id}
        })
        .then(() => {
            res.redirect(`/users/update/${id}`);
        })
        .catch((err) => console.log(err));
        }



        })
        .catch((err) => console.log(err));


       
        
},



// --------------DESTROY DASHBOAD---------------------------------------------------------------------------------------------------------------

    destroy: (req, res) => { // borra usuarios (no es un delete soft)
        db.User.findOne({ where: { id: req.params.id } })
            .then(user => {
                return db.User.destroy({ where: { id: req.params.id } })
            .then(() => {
                if (user.image && user.image !== 'default-avatar-profile.jpg') {
                    const imagePath = path.join(__dirname, '../../public/images/users', user.image);
                        fs.unlinkSync(imagePath);
                        console.log(`BORRE LA IMAGEN: ${user.image}`);
                    }
                        res.redirect('/users/dashboard');
                    });
            })
            .catch((err) => console.log(err));;
    }
}




module.exports = usersController;