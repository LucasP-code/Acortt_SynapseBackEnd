const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllersProd');



router.get('/prod', controller.getAll);
router.get('/prod/:id', controller.getAllinfoprod);
router.post('/prod', controller.CreateProd);


module.exports = router;
