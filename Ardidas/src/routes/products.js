const express = require('express');
const router = express.Router();
const {productCart, productDetail} = require('../controllers/productsControllers')

router
.get('/carrito', productCart)

.get('/detalle', productDetail)



module.exports = router;

