const express = require("express");
const router = express.Router();
const userModel = require("../../src/models/users");
router.post("/", (req, res) => {
  const reqData = req.body;
  const phone = reqData.phone;
  const name = reqData.name;
  const lastName = reqData.lastName;
  const password = reqData.password;
  //console.log(phone,name,lastName,password)
  userModel.findOne({ phone: phone }, (error, data) => {
    if (error) {
      res.json({
        status: 500,
        error: error
      });
      return;
    }
    if (data) {
      res.json({
        error: "این نام کاربری قبلا ثبت نام کرده است",
        status: 202
      });
      return;
    }
    if (data==null) {
      const newUser = new userModel({
        name: name,
        lastName: lastName,
        password: password,
        phone: phone
      });
      newUser.save();
      res.json({
        user: newUser,
        status: 200
      });
      return;
    }
  });
});
module.exports = router;
