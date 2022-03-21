const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
    {
        firstname:{type:String, required:true},
        lastName:{type:String, required:false},
        age :{type:Number, requiredtrue},
        email :{type:String, required:true, unique:true},
    },
    {
        timestamps:true,
    }
});

const User = mongoose.model("users", userSchema)