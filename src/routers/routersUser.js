const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllerUsers')
const middlewares = require('../Middlewares/middlewares')

router.get('/getAll', controller.getAll);
router.get('/infoUser',  controller.getAllInfoUser);
router.post('/CadastrarUsuario', middlewares.validateEmail, middlewares.validatePassword, controller.createUser);

module.exports = router;