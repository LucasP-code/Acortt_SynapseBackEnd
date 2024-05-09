const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');


const validatePassword = (req, res,next) => {
    try {
        const {senha , confirmarSenha} = req.body;

        if (senha !== confirmarSenha) {
            return res.status(422).json({msg: 'As senhas não conferem!'})
        }

        next();
    } catch (error) {
        return res.status(500).json({ status: 10});
    }
    
};


const validateEmail = async(req, res, next) => {
    
    try{
        const {email} = req.body;
        
        const queryEmail = 'SELECT * FROM (SELECT usu_senha, usu_email, usu_id, idCargo FROM Users UNION SELECT usu_senha, usu_email, usu_id) AS Login_Senha WHERE email = ?';

        const [findEmail] = await connection.execute(queryEmail, [email])
        if(findEmail.length == 1) {
            return res.status(401).json({msg: "Email ja cadastrado! utilize outro email", status: 13});
        }

        next();
    } catch (error) {
        return res.status(500).json({ status: 10});
    }
};



const validarLogin = async (req, res, error, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({msg: 'Campos email e senha são obrigatórios'});
    }
    next();
};

module.exports = { 
    validarLogin,
    validateEmail,
    validatePassword
 };