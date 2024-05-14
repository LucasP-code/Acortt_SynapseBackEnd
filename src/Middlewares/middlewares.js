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
        const {usu_email} = req.body;
        
        const queryEmail = 'SELECT * FROM Usuarios WHERE usu_email = ?';

        const [findEmail] = await connection.execute(queryEmail, [usu_email])
        if(findEmail.length !== 0) {
            return res.status(401).json({msg: "Email ja cadastrado! utilize outro email"});
        }

        next();
    } catch (error) {
        return res.status(500).json({ status:22 ,msg:error.message});
        //console.log(msg: error.message);
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