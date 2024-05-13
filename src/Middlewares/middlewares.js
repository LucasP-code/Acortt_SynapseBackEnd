const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');

const validarLogin = async (req, res, error, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({msg: 'Campos email e senha são obrigatórios'});
    }
    next();
};

const validarToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({msg: 'Token não encontrado'});
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Token inválido ou expirado'});
    }

};

module.exports = { validarLogin, validarToken };