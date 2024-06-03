const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/', controller.getProdutos);
module.exports = router;
