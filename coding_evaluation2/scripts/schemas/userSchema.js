const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type:String, required:true },
    middleName: { type:String, required:false },
    lastName : { type:String, required:true },
    age :      { type:Number, required:true },
    email : { type:String, required:true, unique:true },
    address : { type:String, required:true },
    gender : { type:String, required:false },
    type : { type:String, required:false },
    createdAt: { type:String, required:true },
    updatedAt : { type:String, required:true }

});


const User = mongoose.model("user",userSchema)
