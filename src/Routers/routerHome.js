const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllersHome');

router.get('/celulares', controller.getCelulares);
router.get('/computadores', controller.getComputadores);

module.exports = router;
