const express = require('express');
const router = express.Router();
const {formRegister, register, formLogin, login} = require('../controllers/usersControllers');
const uploadFile = require("../validations/imageUser")


router

.get('/register', formRegister)
.post("/register", uploadFile.single("image"), register)

.get('/login', formLogin)
.post("/login", login)



module.exports = router;
