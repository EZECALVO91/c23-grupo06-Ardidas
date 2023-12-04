var express = require('express');
var router = express.Router();
const indexControllers = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexControllers.index);
router.get('/login', indexControllers.login);
router.get('/register', indexControllers.register);
router.get('/carrito', indexControllers.productCart);
router.get('/detalle', indexControllers.productDetail);

module.exports = router;
