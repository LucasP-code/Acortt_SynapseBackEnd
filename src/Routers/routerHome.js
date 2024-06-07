const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/home', controller.getProdutos);
router.get('/home/:cat', controller.getProdutoByCat);

module.exports = router;
