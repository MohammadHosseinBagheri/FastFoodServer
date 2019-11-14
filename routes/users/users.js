const express = require("express");
const router = express.Router();
const userModel = require("../../src/models/users");
const login = require("../users/login");
const register=require('../users/registser')
router.get("/", (req, res) => {
  userModel.find({}, (err, data) => {
    res.json(data);
  });
});
router.use("/login",login);
router.use("/register",register)
module.exports = router;
