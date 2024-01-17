const express = require('express');
const router = express.Router();
const {formRegister, register, formLogin, login} = require('../controllers/usersControllers');
const uploadFile = require('../validation/validationUploadUser');
const registerValidation = require('../validation/validationRegister');


router

.get('/register', formRegister)
.post("/register", uploadFile.single("image"),registerValidation, register)

.get('/login', formLogin)
.post("/login", login)



module.exports = router;
