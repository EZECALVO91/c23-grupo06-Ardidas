const { body } = require('express-validator');
const db = require("../database/models")

module.exports = [
    //Input: Name
    body('name').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
        .isLength({ min: 3, max: 30 }).withMessage("*El valor ingresado debe tener al menos 3 caracteres y maximo 30*").bail(),

    //Input:Email
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

    //Input:Password
    body('password').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
        .isLength({ min: 3, max: 20 }).withMessage("*El minimo son 3 caracteres y el maximo es de 20*").bail(),

    //Input:Image
    body('image').custom((value, { req }) => {
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("*Esta imagen no tiene un formato valido*")

];