const express = require("express");
const router = express.Router();
const userModel = require("../../src/models/users");
router.post("/", (req, res) => {
  const phone = req.body.phone;
  const data=req.body
  userModel.findOne({phone:phone},(error,data)=>{
      //console.log(data)
      if(data){
          res.json({
              status:200,
              data:data
          })
      }
      if(error){
          res.json({
              status:500,
          })
      }
      if(!data){
          res.json({
              status:404
          })
      }
  })
});
module.exports = router;
