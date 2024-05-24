const models = require('../Models/modelsHome');

const getAllProducts = async (req, res) => {
    try {
        const products = await models.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ erro: 'Ocorreu um erro ao buscar os produtos.' });
    }
}

const getProductsByCategory = async (req, res) => {
    const { cat_id } = req.params;
    try {
        const products = await models.getProductsByCategory(cat_id);
        res.json(products);
    } catch (error) {
        res.status(500).json({ erro: 'Ocorreu um erro ao buscar os produtos por categoria.' });
    }
}

module.exports = {
    getAllProducts,
    getProductsByCategory
};
