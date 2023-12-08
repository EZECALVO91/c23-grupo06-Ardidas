const express = require('express');
const router = express.Router();
const {productCart, productDetail, dashboard, productEdit, update} = require('../controllers/productsControllers')

router
.get('/carrito', productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', dashboard)

.get("/update/:id", productEdit)
// .put("/update", update)



module.exports = router;

