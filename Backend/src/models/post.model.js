const mongoose = require ("mongoose")



const postschema = new mongoose.Schema({
    Image:String,
    caption:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const postmodel = mongoose.model("post",postschema)

module.exports = postmodel