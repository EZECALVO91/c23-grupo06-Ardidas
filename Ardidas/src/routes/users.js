const express = require('express');
const router = express.Router();
const {formRegister, register, formLogin, login} = require('../controllers/usersControllers');
const uploadFile = require("../validations/imageUser")
const registerValidation = require('../validation/validationRegister');
const loginValidation = require('../validation/validationLogin')
// const sessionValidate = require("../middleware/sessionValidate");
// const isAdmin = require("../middleware/isAdminValidate");


router
//al validar la session en el controlador no estamos haciendo que funcione como middleware
.get('/register', formRegister)
.post("/register", uploadFile.single("image"),registerValidation, register)

.get('/login', formLogin)
.post("/login", loginValidation, login)



module.exports = router;
