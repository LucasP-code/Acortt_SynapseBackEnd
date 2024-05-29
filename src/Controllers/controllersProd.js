const models = require('../Models/modelsProd');
const {v4} = require('uuid');
const path = require('path');



const getAll = async(req,res) => {
    try {
        const prod = await models.getAll();
        return res.status(200).json(prod);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const CreateProd = async (req, res) => { 
    try {
        const base64Data = req.body.prod_foto.replace(/^data:image\/png;base64,/, "");
        const imgPath = `imagens/${v4()}.png`;
        require("fs").writeFileSync(imgPath, base64Data, 'base64')
        req.body.prod_foto = imgPath;

        const createProd = await models.CreateProd(req.body);
        return res.status(201).json(createProd);
    } catch (error) {
        return res.status(500).json({ status: 4, error: error.message });
    }
}

const getImage = async (req, res) => {
    const [prod] = await models.getImage(req.params.id);
    console.log(prod.prod_foto)
    const img_path = prod.prod_foto
    const realImgPath = path.join(process.cwd(),img_path)
    return res.status(200).sendFile(realImgPath)

}

const getAllinfoprod = async (req, res) => {
    try {
        const InfoProd = await models.getAllinfoprod(req.params.id);
        return res.status(200).json(InfoProd);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = { 
    getAll,
    CreateProd,
    getAllinfoprod,
    getImage
}
