const connection = require("./connection");

const getAllProducts = async () => {
    try {
        const query = 'SELECT * FROM Produtos';
        const [products] = await connection.execute(query);
        return products;
    } catch (error) {
        throw error;
    }
}

const getProductsByCategory = async (cat_id) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE cat_id = ?';
        const [products] = await connection.execute(query, [cat_id]);
        return products;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllProducts,
    getProductsByCategory
};
