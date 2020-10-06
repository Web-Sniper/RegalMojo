const express = require("express")
const app = express()
const PORT = 2001
const mongoose = require("mongoose")
const {MONGOURI} = require("./keys")

app.use(express.json())


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB...")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error", err)
})

require("./models/user")

app.use(require("./routes/auth"))


app.listen(PORT,()=>{
    console.log("Server Started...")
})