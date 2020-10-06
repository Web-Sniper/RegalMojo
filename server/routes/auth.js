const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JSON_SECRATE,SENDGRID_API} = require("../keys")
const requireLogin = require("../middleware/requireLogin")
const sgMail = require('@sendgrid/mail')
const crypto = require("crypto")

sgMail.setApiKey(SENDGRID_API)


router.get("/",requireLogin, (req,res)=>{
    return res.json("Loggedin...")
})

//signup
router.post("/signup",(req,res)=>{
    var {name,email,contact,dob,password} = req.body
    if(!name||!email||!password||!contact||!dob){
        return res.status(422).json({error : "Fill all the fields.."})
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return res.status(422).json({error : "Invalid Email"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist..."})
        }
        bcrypt.hash(password,12,(err,hash)=>{
            password = hash
            const user = new User({
                name,
                email,
                contact,
                dob,
                password
            })
            user.save()
            .then(user=>{
                sgMail.send({
                    to:user.email,
                    from:"atulk5880@gmail.com",
                    subject:"signup success..",
                    html:"<h1>Welcome here.</h1>"
                })
                
                res.json({message:"User saved...."})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    }).catch(err=>{
        console.log(err)
    })
})

//signin
router.post("/login",(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({error : "All fields are mandatory..."})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error : "Invalid user or password..."})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JSON_SECRATE)
                const user = {_id:savedUser._id,name:savedUser.name,email:savedUser.email}
                res.json({token,user})
            }
            else{
                return res.status(422).json({error : "Invalid user or password..."})
            }
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/reset-password",(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            return res.send(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User doesn't exist.."})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then(result=>{
                sgMail.send({
                    to:user.email,
                    from:"atulk5880@gmail.com",
                    subject:"reset-password",
                    html:`
                    <h5>Click on link to reset password..
                    <a href="http://localhost:3000/reset/${token}">Link</a>
                    </h5>
                    `
                })
                res.json({message:"Check your email..."})
            })
        })

    })

})




router.post("/new-password",(req,res)=>{
    var newPassword =req.body.password
    const sentToken = req.body.token
    console.log(sentToken)
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then((user)=>{
        if(!user){
            return res.status(422).json({error:"try again session expired..."})
        }
        bcrypt.hash(newPassword,12).then(hashedPassword=>{
            user.password = hashedPassword
            user.resetToken = undefined
            user.expireToken = undefined
            user.save().then((savedUser)=>{
                res.json({message:"Password Updated Successfully..."})
            })
        }).catch(error=>{
            console.log(error)
        })
        
    })
})

module.exports = router