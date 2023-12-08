const express = require('express');
const router = express.Router();
const {productCart, productDetail, dashboard, productLoad, create, productEdit, update} = require('../controllers/productsControllers')

router
.get('/carrito', productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', dashboard)

.get("/productLoad",productLoad)
.post("/create",create)

.get("/update/:id", productEdit)
// .put("/update", update)



module.exports = router;

