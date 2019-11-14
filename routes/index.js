const express=require('express');
const router=express.Router();
const api=require('./api/api')
const users=require('./users/users')
router.use('/api',api);
router.use('/users',users)
module.exports=router;
