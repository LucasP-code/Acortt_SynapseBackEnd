const models = require('../Models/modelPesqusa');

const searchProducts = async (req, res) => {
    const { prod_nome, prod_preco, prod_marca, cat_id } = req.body;
    try {
        const searchParams = {
            nome: prod_nome,
            preco: prod_preco,
            marca: prod_marca,
            categoria: cat_id
        };
        const products = await models.searchProducts(searchParams);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' });
    }
}



module.exports = {
    searchProducts
}