const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const restaurants=require('../../src/models/addRestaurants');
const places=require('../../src/models/addPlaces');


router.get('/restaurants',(req,res)=>{
    restaurants.find({},(error,data)=>{
        res.json(data)
    })
})
router.get('/palces',(req,res)=>{
    places.find({},(error,data)=>{
        res.json(data)
    })
})
module.exports=router;