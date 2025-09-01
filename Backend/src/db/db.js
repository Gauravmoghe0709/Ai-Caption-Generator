const mongoose =  require("mongoose")


function connecttodb(){
    mongoose.connect(process.env.MONGOODB_CONNECTION)
    .then(()=>{
        console.log("connect to AI database...")
    }).catch((error)=>{
        console.log(error)
    })
}


module.exports= connecttodb