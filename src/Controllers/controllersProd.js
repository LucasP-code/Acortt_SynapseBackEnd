const models = require('../models/modelsPod');


const getAll = async(req,res) => {
    try {
        const prod = await models.getAll();
        return res.status(200).json(prod);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const createProd = async(req, res) => {
    try {
        const createProd = await models.criateProd(req.body);
        return res.status(201).json(createProd);
    } catch (error) {
        return res.status(500).json({ status: 4 , error: error.message});
    }
}

const getAllInfoprod = async (req, res) => {
    try {
        const InfoProd = await models.getAllInfoprod();
        return res.status(200).json(InfoProd);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = { 
    getAll,
    createProd,
    getAllInfoprod
}
