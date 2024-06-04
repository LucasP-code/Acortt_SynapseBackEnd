const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controllerUsers')
const middlewares = require('../Middlewares/middlewares')

router.get('/user', controller.getAll);
router.post('/user', middlewares.validateEmail, middlewares.validatePassword, controller.createUser);
router.get('/user/:id', middlewares.validarToken, controller.getUserById);
//router.get('/user/me', controller.getUserById);

module.exports = router;


