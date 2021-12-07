const express = require("express");
const   router = express.Router();
const infoSchema = require("./infoschema")


router.post("/post",async (req,res,next)=>{
    const data = new infoSchema({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City,
        created_at: new Date()
    })

    const Userdata = await data.save();
    console.log(Userdata)
    return res.json({
        msg:Userdata
    })
    
})
router.get("/getAll",async(req,res,next)=>{
    const getData = await infoSchema.find()
    console.log(getData)
    if(getData.length>0){
        return res.json(getData)
    }else{
        return res.json({
            success:false,
            msg:"No User found"
        })
    }
})


router.put("/update",async(req,res,next)=>{
    const _id = req.body._id;

    const updateData = await infoSchema.update({
        _id:_id},
        {
        $set:{
            Name:req.body.Name,
            Age:req.body.Age,
            City:req.body.City
        }
    }
    )
return res.json(updateData)
})

router.delete("/Del",async(req,res,next)=>{
    const id = req.body.id;
    console.log(1)
    const Delete = await infoSchema.deleteOne({_id:id})

    return res.json(Delete)


})
module.exports = router;