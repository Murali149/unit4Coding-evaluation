const mongoose = require("mongoose");

const masterAccSchema = new mongoose.Schema({
    balance  : { type:String, required:true },
    createdAt: { type:String, required:true },
    updatedAt : { type:String, required:true }
});


const MasterAcc = mongoose.model("user",savingACCSchema)


module.exports = MasterAcc;