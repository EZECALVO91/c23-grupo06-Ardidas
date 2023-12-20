const express = require('express');
const router = express.Router();
const {productCart, productDetail, dashboard, productLoad, create, productEdit, update, destroy} = require('../controllers/productsControllers')

router
.get('/carrito/:id', productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', dashboard)

.get("/productLoad",productLoad)
.post("/create",create)

.get("/update/:id", productEdit)
// .put("/update", update)

.delete('/delete/:id', destroy)



module.exports = router;

