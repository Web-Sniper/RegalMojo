const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type: Number,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    resetToken:String,
    expireToken:Date,
    password:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)