const router = require('express').Router();
const FileModel = require('../models/File');
router.get('/list',async (req,res)=>{
    const files = await FileModel.find();
    if(files.length<=0){
        return res.status(404).send({
            message:'No files found'
        })
    }
    return res.status(200).send({files:files});
}).get('/file/:id',async (req,res)=>{
    const {id} = req.params;
    const file = await FileModel.findById(id);
    if(!file){
        return res.status(404).send({
            message:'File not found'
        })
    }
    return res.status(200).send({file:file});
})
.
post('/new',async (req,res)=>{
    const {label,url} = req.body;
    const new_file = new FileModel({label,url});
    new_file.save().then((file)=>{
        return res.status(200).send({file:file});
    }).catch((err)=>res.status(500).send({err:err}));
})

module.exports = router;