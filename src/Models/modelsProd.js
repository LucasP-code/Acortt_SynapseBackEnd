const connection = require("./connection");

class Produtos{
    constructor(prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id ,cat_id){   
        (this.prod_nome = prod_nome),
        (this.prod_preco = prod_preco),
        (this.prod_marca = prod_marca),
        (this.prod_descricao = prod_descricao),
        (this.prod_data_public = prod_data_public),
        (this.prod_ativo = prod_ativo),
        (this.prod_foto = prod_foto),
        (this.usu_id = usu_id),
        (this.cat_id = cat_id);
        
    }
}



const CreateProd = async (infoProd) => { 
    const { prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id } = infoProd;
    const query = 'INSERT INTO Produtos (prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id) VALUES (?,?,?,?,?,?,?,?,?,?)';
    const newProd = new Produtos(prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id);

    const [createProd] = await connection.execute(query, 
        [newProd.prod_nome, 
        newProd.prod_preco, 
        newProd.prod_marca, 
        newProd.prod_descricao, 
        newProd.prod_data_public,
        newProd.prod_ativo, 
        newProd.prod_foto,
        newProd.usu_id,
        newProd.cat_id]);

        return createProd;
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

const getAllinfoprod = async (usu_id) => {
    const query = 'SELECT prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id FROM Produtos WHERE usu_id = ?';

    const [infoProd] = await connection.execute(query, [usu_id]);
    return infoProd;
};

module.exports = {
    CreateProd,
    getAll,
    getAllinfoprod,
}