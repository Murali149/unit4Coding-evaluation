const mongoose = require("mongoose");

const commentsSchema  = mongoose.Schema({
    {
        Comment:{type:String, required:true},
        
    },
    {
        timestamps:true,
    }
});

const User = mongoose.model("comments", commentsSchema)