const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexRouter = require("./router")
const infoschema = require("./infoschema")
const morgan = require("morgan");
const bodyparser = require("body-parser")
const cors = require("cors")
app.use(cors())
app.use(morgan("dev"));
app.use(bodyparser.json())


app.use("/index",indexRouter)
app.listen(5000,()=>{
    console.log("server started")
})

mongoose.connect("mongodb://localhost:27017/merndb",{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("db connected")
    }else{
        console.log("eror")
    }
})