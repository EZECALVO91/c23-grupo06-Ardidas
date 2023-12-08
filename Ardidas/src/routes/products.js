const express = require('express');
const router = express.Router();
const {productCart, productDetail, dashboard} = require('../controllers/productsControllers')

router
.get('/carrito', productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', dashboard)



module.exports = router;

