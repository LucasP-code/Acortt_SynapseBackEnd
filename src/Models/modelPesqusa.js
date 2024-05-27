const connection = require("./connection");

const searchProducts = async (searchParams) => {
    try {
        let query = 'SELECT * FROM Produtos WHERE 2';
        const values = [];

        if (searchParams.nome) {
            query += ' AND prod_nome LIKE ?';
            values.push(`%${searchParams.nome}%`);
        }

        if (searchParams.preco) {
            query += ' AND prod_preco = ?';
            values.push(searchParams.preco);
        }

        if (searchParams.marca) {
            query += ' AND prod_marca LIKE ?';
            values.push(`%${searchParams.marca}%`);
        }

        if (searchParams.categoria) {
            query += ' AND cat_id = ?';
            values.push(searchParams.categoria);
        }

        const [products] = await connection.execute(query, values);
        return products;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    searchProducts,
}