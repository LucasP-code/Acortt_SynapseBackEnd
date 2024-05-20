const express = require('express');
const router = express.router();

const controller = require('../Controllers/controllersHome');


router.get('/home', Controllers.getAll);
router.get('/home/notebook', Controllers.getAllNotebook);
router.get('/home/cell', Controllers.getAllCell);
router.get('/home/componetes', Controllers.getAllComponetes);
router.get('/home/acessorios', Controllers.getAllAcessorios);

module.exports = router;