const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllerUsers')
const middlewares = require('../Middlewares/middlewares')

router.get('/InfoUser',  controller.getAllInfoUser);
router.post('/CadastrarUsuario', middlewares.validateEmail, middlewares.validatePassword, controller.createUser);

module.exports = router;