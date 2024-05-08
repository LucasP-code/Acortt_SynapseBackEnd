const models = require('../Models/modelsLogin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req,res) => {
    try{
        const {email,senha} = req.body;

        const user = await models.login(email, senha);

        const hashSenha = user[0].usu_senha;

        const senhaCorreta = bcrypt.compare(senha, hashSenha);  

        if (senhaCorreta) {
            const token = jwt.sign(
                {
                    id: user[0].usu_id,
                    email: user[0].usu_email,
                    nome: user[0].usu_nome,
                },
                process.env.SECRET,
                {expiresIn: '1h'}
            ); 
            return res.status(200).json({msg: 'Login feito com sucesso!!!', token});
        } else {
            return res.status(400).json({msg: 'Email ou senha incorretos!!'});
        }
    } catch (error) {
        return res.status(500).json({msg: "Erro interno do servidor ao logar o usuário"});
    };
}

module.exports = {
    login,
};