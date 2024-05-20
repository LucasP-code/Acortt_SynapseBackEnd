const models = require('../models/modelsHome');

const getAll = async(req,res) => {
    try {
        const home = await models.getAll();
        return res.status(200).json(home);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getAllNotebook = async(req, res) =>{
    try {
        const notebook = await models.getAllNotebook();
        return res.status(200).json(notebook);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getAllCell = async(req, res) =>{
    try {
        const cell = await models.getAllCell();
        return res.status(200).json(cell);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getAllComponentes = async(req, res) =>{
    try {
        const componentes = await models.getAllComponentes();
        return res.status(200).json(componentes);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getAllAcessorios = async(req, res) =>{
    try {
        const acessorios = await models.getAllAcessorios();
        return res.status(200).json(acessorios);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    getAll,
    getAllNotebook,
    getAllCell,
    getAllComponentes,
    getAllAcessorios
}

