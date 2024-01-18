const {body} = require('express-validator');
const {getJson} = require("../utility/jsonMethod");
const users = getJson('users');


module.exports =[
    body('usuario').isEmail().withMessage('Tienes que ingresar un email valido').bail(),
    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
]