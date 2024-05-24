const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/home', controller.getAllProducts);
router.get('/home/categoria/:cat_id', controller.getProductsByCategory);

module.exports = router;
