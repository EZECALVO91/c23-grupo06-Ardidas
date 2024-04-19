const express = require('express');
const router = express.Router();
const {index, productCart, productDetail, dashboard, productLoad, create, productEdit, update, destroy, loadStock} = require('../controllers/productsControllers')
const multer = require("multer");
const path = require("path");

const createProductValidation = require('../validation/validationCreateProduct');

const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");
const uploadImg = require ('../validation/validationProductImg')


router
.get("/", index)

.get('/carrito/:id', sessionValidate, productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', isAdmin, dashboard)

.get("/create", isAdmin, productLoad)
.post("/",uploadImg.fields([{name:"image", maxcount:1}, {name:"image2", maxcount:1}, {name:"image3", maxcount:1}, {name:"image4", maxcount:1}]), isAdmin, createProductValidation, create)

.get("/update/:id", isAdmin, productEdit)
.put("/update/:id",uploadImg.fields([{name:"image", maxcount:1}, {name:"image2", maxcount:1}, {name:"image3", maxcount:1}, {name:"image4", maxcount:1}]), isAdmin, createProductValidation, update)

.delete('/delete/:id', isAdmin, destroy)



module.exports = router;

