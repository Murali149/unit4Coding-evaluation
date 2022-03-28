// importing express and moongose
const express = require("express");
const moongose = require("moongose");


const app = express();

// connecting to database
const connectDB = () =>{
    return moongose.connect("mongodb://127.0.0.1:27017/toDoList_c4")
}



// user schema and model
const userSchema = moongose.Schema(
    {
        first_Name:{type:String, required:true},
        last_Name:{type:String, required:false},
        email:{type:String, required:true},
        password:{type:String, required:false},
    },
    {
        versionKey:false,
        timestamp:true,
    }
)
const User = moongose.model("users", userSchema)


// todolist schema and model
const toDo = moongose.Schema(
    {
        title:{type:String, required:true},
    },
    {
        versionKey:false,
        timestamp:true,
    }
)
const toDoList = moongose.model("toDoList", userSchema)



// // getting user data from database
// app.get("/users", async(req,res)=>{
//     const userInfo = await User.find({},{}).lean().exec();
//     return res.send(userInfo)
// })

app.get("/todos", async(req,res)=>{
    const toDoData = await toDo.find({},{}).lean().exec();
    return res.send(toDoData)
})

app.get("/todos/:id", async(req,res)=>{
    const toDoData = await toDo.findById({},{$set{}}).lean().exec();
    return res.send(toDoData)
})



app.listen(5432, async()=>{
    try {
        await connectDB();
        console.log("listning at port 5432")
    } catch (error) {
        console.log(error)
    }
})

