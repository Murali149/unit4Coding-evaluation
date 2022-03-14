const mongoose = require("mongoose");

const fixedAccSchema = new mongoose.Schema({
    account_number: { type:String, required:true, unique:true },
    balance  : { type:String, required:true },
    interestRate : { type:String, required:true },
    startDate: { type:String, required:true },
    maturityDate  : { type:String, required:true },
    createdAt: { type:String, required:true },
    updatedAt : { type:String, required:true }
});


const FixedAcc = mongoose.model("user",savingACCSchema)


module.exports = FixedAcc;