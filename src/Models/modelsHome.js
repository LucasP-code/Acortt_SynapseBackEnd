const connection = require("./connection");



const getCelulares = async (prod_categoria) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE prod_categoria = "celular" ORDER BY RAND() LIMIT 6';
        const [products] = await connection.execute(query, [prod_categoria]);
        return products;
    } catch (error) {
        throw error;
    }
};

const getComputadores = async (prod_categoria) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE prod_categoria = "computador" ORDER BY RAND() LIMIT 6';

        const [products] = await connection.execute(query, [prod_categoria]);
        return products;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCelulares,
    getComputadores,
};
