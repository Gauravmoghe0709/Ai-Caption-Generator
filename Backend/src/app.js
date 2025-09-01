const express = require("express")
const userrouter = require ("./routes/user.routes")
const cookieparser = require ("cookie-parser")


const app = express()

app.use(express.json())
app.use("/",userrouter)
app.use(cookieparser)

module.exports = app