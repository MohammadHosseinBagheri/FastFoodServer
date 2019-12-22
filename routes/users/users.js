const express = require("express");
const router = express.Router();
const userModel = require("../../src/models/users");
const login = require("../users/login");
const register = require("../users/registser");
const driverRegister = require("../users/driver");
const UserSelling = require("./userSelling");
router.get("/", (req, res) => {
  userModel.find({}, (err, data) => {
    res.json(data);
  });
});
router.use("/login", login);
router.use("/register", register);
router.use("/driver", driverRegister);
router.use("/userselling",UserSelling);
module.exports = router;
