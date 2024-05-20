const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllersProd');



router.get('/prod', controller.getAll);
router.post('/prod', controller.createProd);


module.exports = router;
