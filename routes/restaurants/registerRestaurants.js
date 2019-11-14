const express = require("express");
const router = express.Router();

router.post('/',(req,res)=>{
    res.json({
        data:req.body
    })
})

module.exports=router