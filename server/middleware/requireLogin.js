const jwt = require("jsonwebtoken")
const {JSON_SECRATE} = require("../keys")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({err:"You must be logged in...."})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JSON_SECRATE,(error,payload)=>{
        if(error){
            console.log(error)
            return res.status(401).json({error:"Please login first"})
        }
        const {_id} = payload
        User.findById(_id).then(userData=>{
            req.user = userData
            next()
        })

    })
}