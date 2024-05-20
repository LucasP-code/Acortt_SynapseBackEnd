const conetion = require('../conetion');

class Home{
    constructor(prod_nome, prod_preco,prod_marca,prod_foto,cat_id ){
        (this.prod_nome = prod_nome),
        (this.prod_preco = prod_preco),
        (this.prod_marca = prod_marca),
        (this.prod_foto = prod_foto),
        (this.cat_id = cat_id);
    }
}

const getAll = async () => {
    try {
        const query = 'SELECT * FROM Produtos';

        const [prod] = await connection.execute(query);
        return prod;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
}

const getAllNotebook = async (req , res)=> {
    try {
        const query = 'SELECT * FROM Produtos WHERE cat_id = 1';

        const [prod] = await connection.execute(query);
        return prod;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
}

const getAllCell = async (req , res) =>{
    try {
        const query = 'SELECT * FROM Produtos WHERE cat_id = 2';

        const [prod] = await connection.execute(query);
        return prod;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
} 

const getAllComponetes = async (req, res) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE cat_id = 3';

        const [prod] = await connection.execute(query);
        return prod;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
};

const getAllAcessorios = async (req, res) => {
    try {
        const query = 'SELECT * FROM Produtos WHERE cat_id = 4';

        const [prod] = await connection.execute(query);
        return prod;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
}

module.exports = {
    getAll,
    getAllNotebook,
    getAllCell,
    getAllComponetes,
    getAllAcessorios    
}
