const mongoose = require("mongoose");

const booksSchema  = mongoose.Schema({
    {
        coverImage:{type:String, required:true},
        content:{type:String, required:true},
        
    },
    {
        timestamps:true,
    }
});

const User = mongoose.model("books", booksSchema)