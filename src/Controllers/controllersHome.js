const models = require('../Models/modelsHome');

const getProdutos = async (req,res) => {
    try {
        const { celulares, computadores } = await models.getProdutos();
        return res.status(200).json({celulares, computadores});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

const getProdutoByCat = async (req,res) => {
    try {
        const { cat } = req.params;
        const produtos = await models.getProdutoByCat(cat);
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

module.exports = {
    getProdutos,
    getProdutoByCat
};
