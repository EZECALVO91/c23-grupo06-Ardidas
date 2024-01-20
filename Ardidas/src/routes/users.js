const express = require('express');
const router = express.Router();
const {formRegister, register, formLogin, login, usersEdit,usersUpdate ,
    UsersDashboard, userProfile, userProfileEdit, createPrivileges,
    createUserPrivileges, destroy} = require('../controllers/usersControllers');
    
const uploadFile = require("../validations/imageUser")
const registerValidation = require('../validation/validationRegister');
const loginValidation = require('../validation/validationLogin')
const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");


router
//al validar la session en el controlador no estamos haciendo que funcione como middleware
.get('/register', formRegister)
.post("/register", uploadFile.single("image"),registerValidation, register)

.get('/login', formLogin)
.post("/login", loginValidation, login)

//Dashboard de Usurios
.get('/dashboard',isAdmin, UsersDashboard)

.get('/createPrivileges', isAdmin, createPrivileges)
.post('/createPrivileges',uploadFile.single("image"), isAdmin, registerValidation, createUserPrivileges)

//Edicion de usuarios departe de Dashboar
.get('/update/:id',isAdmin , usersEdit )
.put('/update/:id',isAdmin ,usersUpdate)

//Profile para el usuario y su cambio de informacion
.get('/profile/:id', sessionValidate, userProfile)
.put('/profile/:id', sessionValidate,  userProfileEdit)


//Eliminar Usuarios Dashboard
.delete('/delete/:id', isAdmin, destroy)



module.exports = router;
