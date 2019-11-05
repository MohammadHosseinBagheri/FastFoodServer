const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const mymodel=require('../../src/models/addRestaurants');


router.get('/restaurants',(req,res)=>{
    mymodel.find({},(error,data)=>{
        res.json(data)
    })
})
module.exports=router;