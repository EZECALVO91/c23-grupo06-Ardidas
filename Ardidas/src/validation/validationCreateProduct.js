const { body } = require('express-validator');

module.exports = [
    body('image').custom((value, { req }) => {
      if (req.errorImgProfile) {
         return false;
      };
      return true;
    }).withMessage("Esta imagen no tiene un formato valido"),

    body("name").notEmpty().withMessage("El nombre no puede estar vacío").bail()
    .isLength({ min: 3, max: 50 }).withMessage("Su longitud debe ser entre 3 y 50 caract."),
    
    body("price").notEmpty().withMessage("El precio no puede estar vacío").bail(),

    body("description")
    .optional()
    .custom((value, { req }) => {
        // Verifica si el campo está presente y si lo está, verifica su longitud
        if (value && value.length < 20) {
            throw new Error("La descripción debe tener al menos 20 caracteres.");
        }
        return true;
    }),

    body('sizes').custom((value, { req }) => {
        const selectedSizes = req.body.sizes;
        if (!selectedSizes ) {
          throw new Error('Debe seleccionar al menos un talle');
        }
        return true;
      }),

  
]