const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/controllersLogin');

router.post('/login', controllers.login);

module.exports = router;    