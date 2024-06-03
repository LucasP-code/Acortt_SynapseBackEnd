const connection = require("./connection");

const searchProducts = async (search) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE prod_nome LIKE ? OR prod_marca LIKE ? OR prod_categoria LIKE ?';
        const searchPattern = `${search}`;
        const [products] = await connection.execute(query, [searchPattern, searchPattern, searchPattern]);
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error searching products:', error);
        throw error;
    }
};

module.exports = {
    searchProducts,
}