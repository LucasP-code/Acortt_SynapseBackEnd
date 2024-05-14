const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');

const validarLogin = async (req, res, error, next) => {
    if (error) {
        return res.status(500).json({msg: error.message});
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