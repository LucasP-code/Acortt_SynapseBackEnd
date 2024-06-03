const connection = require("./connection");



const getProdutos = async () => {
    try {
        const queryCelulares = 'SELECT * FROM Produtos WHERE prod_categoria = "celular" ORDER BY RAND() LIMIT 6';
        const queryComputadores = 'SELECT * FROM Produtos WHERE prod_categoria = "computador" ORDER BY RAND() LIMIT 6';
        
        const [celulares] = await connection.execute(queryCelulares);
        const [computadores] = await connection.execute(queryComputadores);
        
        return { celulares, computadores };
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getProdutos
};
