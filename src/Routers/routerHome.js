const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/', controller.getProdutos);
router.get('/:cat', controller.getProdutoByCat);
module.exports = router;
