const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllersHome');


router.get('/home', controller.getAll);
router.get('/home/notebook', controller.getAllNotebook);
router.get('/home/cell', controller.getAllCell);
router.get('/home/componetes', controller.getAllComponetes);
router.get('/home/acessorios', controller.getAllAcessorios);

module.exports = router;