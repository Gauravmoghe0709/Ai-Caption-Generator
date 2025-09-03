const express = require("express")
const userrouter = require ("./routes/user.routes")
const postrouter = require ("./routes/Post.routes")
const cookieParser = require ("cookie-parser")


const app = express()
app.use(cookieParser())


app.use(express.json())
app.use(express.urlencoded({
    
    extended:true
}))
app.use("/",userrouter)
app.use("/userpost",postrouter)


module.exports = app