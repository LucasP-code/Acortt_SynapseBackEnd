const models = require('../Models/modelUsers')

const getAll = async(req,res) => {

    try {
        const users = await models.getAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

const createUser = async(req, res) => {

    try {
        const createUser = await models.createUser(req.body);
        return res.status(201).json(createUser);
    } catch (error) {
        return res.status(500).json({ status: 4 , error: error.message});
    }
    
};
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const [user] = await models.getAllInfoUser(id);
        if(!user){
            return res.status(500).json({ erro: "erro ao buscar por suas informações" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};


module.exports = {
    getAll,
    createUser,
    getUserById
};
