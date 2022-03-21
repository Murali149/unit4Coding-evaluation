const mongoose = require("mongoose");

const publicationNamesSchema  = mongoose.Schema({
    {
        name:{type:String, required:true},
        
    },
    {
        timestamps:true,
    }
});

const User = mongoose.model("publicationName", publicationNamesSchema)