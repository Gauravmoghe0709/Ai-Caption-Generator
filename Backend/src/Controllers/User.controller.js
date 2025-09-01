const usermodel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registercontroller(req, res) {
    const { username, password } = req.body

    const isuser = await usermodel.findOne({ username })

    if (isuser) {
        return res.status(400).json({
            message: "user already exist"
        })
    }

    const user = await usermodel.create({
        username,
        password:await bcrypt.hash(password,10) // hashing a password
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.cookie("token", token)

    return res.status(201).json({
        message: "New user created sucessfully..."
    })
}

async function logincontroller(req, res) {
    const { username, password } = req.body

    const user = await usermodel.findOne({
        username
    })
    if (!user) {
        return res.status(401).json({
            message: "user not found..."
        })
    }

    const userpassword = await bcrypt.compare(password,user.password)

    if (!userpassword) {
        return res.status(400).json({
            message: "password not match"
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(200).json({
        message: "login sucessfully",
        user: {
            username: user.username,
            id: user._id
        }

    })


}



module.exports = {
    registercontroller,
    logincontroller,
}
