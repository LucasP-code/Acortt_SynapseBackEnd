const models = require('../Models/modelsHome');

const getProdutos = async (req,res) => {
    try {
        const { celulares, computadores } = await models.getProdutos();
        return res.status(200).json({celulares, computadores});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};


    module.exports = {
        getProdutos
    };
