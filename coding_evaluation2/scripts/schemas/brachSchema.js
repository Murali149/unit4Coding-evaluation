const mongoose = require("mongoose");

const brachSchema = new mongoose.Schema({
    name: { type:String, required:true },
    address : { type:String, required:true },
    IFSC: { type:String, required:true },
    MICR : { type:Number, required:true },
    createdAt: { type:String, required:true },
    updatedAt : { type:String, required:true }
});


const Branch = mongoose.model("user",brachSchema)


module.exports = Branch;