const {model, Schema} = require('mongoose');

const file_schema = new Schema({
    label:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('File',file_schema);