const { body } = require('express-validator');

module.exports = [
    body("name").notEmpty().withMessage("El nombre no puede estar vacío").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Su longitud debe ser entre 3 y 50 caract."),
    
    body("price").notEmpty().withMessage("El precio no puede estar vacío").bail(),

    body('sizes').custom((value, { req }) => {
        const selectedSizes = req.body.sizes;
        if (!selectedSizes ) {
          throw new Error('Debe seleccionar al menos un talle');
        }
        return true;
      })
]