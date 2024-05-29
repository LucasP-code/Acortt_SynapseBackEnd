const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/', controller.getAllProducts);
router.get('/:cat_id', controller.getProductsByCategory);

module.exports = router;
