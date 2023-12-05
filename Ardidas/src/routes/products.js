const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers')

router
.get('/carrito', productsController.productCart)
.get('/detalle', productsController.productDetail)

.get("/editar", productsController.productEdit)

module.exports = router

