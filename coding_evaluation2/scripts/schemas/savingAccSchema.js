const mongoose = require("mongoose");

const savingAccSchema = new mongoose.Schema({
    account_number: { type:String, required:true, unique:true },
    balance  : { type:String, required:true },
    interestRate : { type:String, required:true },
    createdAt: { type:String, required:true },
    updatedAt : { type:String, required:true }
});


const SavingAcc = mongoose.model("user",savingACCSchema)


module.exports = SavingAcc;