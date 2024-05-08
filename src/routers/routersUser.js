const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllerUsers')
const middlewears = require('../Middlewares/middlewares')

router.get('/InfoUser',  controller.getAllInfoUser);
router.post('/CadastrarUsuario', middleware.validateEmail, middleware.validatePassword, controller.createUser);

module.exports = router;