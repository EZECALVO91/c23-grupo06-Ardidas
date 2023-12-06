const express = require('express');
const router = express.Router();
const {formRegister, register, formLogin, login} = require('../controllers/usersControllers');

router

.get('/register', formRegister)
.post("/register", register)

.get('/login', formLogin)
.post("/login", login)



module.exports = router;
