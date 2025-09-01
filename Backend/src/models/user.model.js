const mongoose = require ("mongoose")


const userschema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true,
    }
})

const usermodel = mongoose.model("users",userschema)

module.exports = usermodel