const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllersProd');

router.get('/prod', controller.getAll);
router.get('/prod/:id', controller.getAllinfoprod);
router.post('/prod', controller.CreateProd);
router.get('/prod/img/:id', controller.getImage);
router.get('/prod/user/:id', controller.getAllProdUsu);

module.exports = router;
