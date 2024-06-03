const models = require('../Models/modelsHome');

const getCelulares = async (req,res) => {
    try {
        const celulares = await models.getCelulares();
        return res.status(200).json(celulares);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};


    const getComputadores = async (req, res) => {
        try {
            const computadores = await models.getComputadores();
            return res.status(200).json(computadores);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    module.exports = {
        getCelulares,
        getComputadores,
    };
