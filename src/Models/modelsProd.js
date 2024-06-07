const environment = require("../enviroment");
const connection = require("./connection");
const {v4} = require('uuid');

class Produtos{
    constructor(prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto, prod_categoria, usu_id){   
        (this.prod_nome = prod_nome),
        (this.prod_preco = prod_preco),
        (this.prod_marca = prod_marca),
        (this.prod_descricao = prod_descricao),
        (this.prod_data_public = prod_data_public),
        (this.prod_ativo = prod_ativo),
        (this.prod_foto = prod_foto),
        (this.prod_categoria = prod_categoria),
        (this.usu_id = usu_id);
        
    }
}

const CreateProd = async (infoProd) => { 
    const { prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto, prod_categoria, usu_id} = infoProd;
    const query = 'INSERT INTO Produtos (prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto, prod_categoria, usu_id) VALUES (?,?,?,?,?,?,?,?,?)';
    const newProd = new Produtos(prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto, prod_categoria, usu_id);

    const [createProd] = await connection.execute(query, 
        [newProd.prod_nome, 
        newProd.prod_preco, 
        newProd.prod_marca, 
        newProd.prod_descricao, 
        newProd.prod_data_public,
        newProd.prod_ativo, 
        newProd.prod_foto,
        newProd.prod_categoria,
        newProd.usu_id,
        ]);

        return createProd;
}

const getAll = async () => {
    try {
        const query = 'SELECT * FROM Produtos';

        let [prods] = await connection.execute(query);
        prods = prods.map((prod) => {
            prod.prod_foto = `${environment.URL}/prod/img/${prod.prod_id}`;
            return prod
        })
        return prods;
    } catch (error) {
        return res.status(500).json({status: 7});
    }
}

const getAllProdUsu = async (usu_id) => {
    const query = 'SELECT prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public, prod_ativo, prod_foto, prod_categoria,usu_id FROM Produtos WHERE usu_id = ?';

    const [infoProd] = await connection.execute(query, [usu_id]);
    return infoProd;
};

const getAllinfoprod = async (prod_id) => {
    const query = 'SELECT prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public, prod_ativo, prod_foto, prod_categoria,usu_id FROM Produtos WHERE prod_id = ?';

    const [infoProd] = await connection.execute(query, [prod_id]);
    return infoProd;
};

const getImage = async (prod_id) => {
    const query = 'SELECT prod_foto FROM Produtos WHERE prod_id = ?';

    const [infoProd] = await connection.execute(query, [prod_id]);
    return infoProd;
};

module.exports = {
    CreateProd,
    getAll,
    getAllinfoprod,
    getImage,
    getAllProdUsu
}