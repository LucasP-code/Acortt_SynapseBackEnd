const models = require('../Models/modelPesquisa');

const searchProducts = async (req, res) => {
    try {
        const { search } = req.body;
        const products = await models.searchProducts(search);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' });
    }
}

module.exports = {
    searchProducts,
}