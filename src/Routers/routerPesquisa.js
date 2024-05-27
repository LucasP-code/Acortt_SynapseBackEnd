const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllersPesquisa');

router.get('/pesquisa', controller.searchProducts);

module.exports = router;