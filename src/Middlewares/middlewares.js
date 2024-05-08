const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');

const validarLogin = async (req, res, error, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({msg: 'Campos email e senha são obrigatórios'});
    }
    next();
};

module.exports = { validarLogin };