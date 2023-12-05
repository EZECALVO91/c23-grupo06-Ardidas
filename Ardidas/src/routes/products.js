const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers')

router.get('/carrito', productsController.productCart);
router.get('/detalle', productsController.productDetail);

module.exports = router

