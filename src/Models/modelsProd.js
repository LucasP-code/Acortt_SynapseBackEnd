const connection = requireuire('./connection');

class Products{
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

const criateProd = async (infoProd) => { 
    const { prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id } = infoProd;
    const query = 'INSERT INTO Produtos (prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id) VALUES (?,?,?,?,?,?,?,?,?)';
    const newProd = new Products(prod_nome, prod_preco, prod_marca, prod_descricao, prod_data_public,prod_ativo, prod_foto,usu_id,cat_id);

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

module.exports = {
    criateProd,
    getAll
}