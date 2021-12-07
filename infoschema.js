const mongoose = require("mongoose");


const infoSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Age:{
        type:String
    },
    City:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})

module.exports  = mongoose.model("info",infoSchema)