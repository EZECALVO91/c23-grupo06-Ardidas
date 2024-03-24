const { body } = require('express-validator');
const db = require("../database/models")

module.exports = [
    body('name').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
        .isLength({ min:5, max: 30 }).withMessage("*El valor ingresado debe tener al menos 5 caracteres y maximo 30*").bail(),


    body('email').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
        .isEmail().withMessage('*Debe ser un correo con formato valido*').bail()
        .custom(value => {
            return db.User.findOne({
                where: {
                    email: value
                }
            })
                .then(user => {
                    if (user) {
                        return Promise.reject('El email se encuentra registrado')
                    }
                })
                .catch(() => {
                    return Promise.reject('El email se encuentra registrado')
                })
        }),



    body('password').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
    .isLength({min:6,max:20}).withMessage("La contraseña debe tener entre 6 y 20 caracteres")
        .custom((value, { req }) => {
            return value == req.body.password2;
        }).withMessage("*Los password no coinciden*"),

    body('image').custom((value, { req }) => {
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("*Esta imagen no tiene un formato valido*")

];
