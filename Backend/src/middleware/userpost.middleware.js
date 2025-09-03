// create a protected API as a middleware beacuse if user have valid token than that create a post 

const jwt = require("jsonwebtoken")
const usermodel = require("../models/user.model")

async function userpostmiddleware(req, res, next) {

    const token = req.cookies.token
    

    if (!token) {
        return res.status(401).json({
            message: "unauthorised token...!"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)

        const user = await usermodel.findOne({
            _id: decode.id
        })

        req.user = user // sent a data through req.user
        next()
        
    } catch (error) {
        return res.status(401).json({
            message: "wrong token"
        })
    }




}

module.exports = userpostmiddleware
