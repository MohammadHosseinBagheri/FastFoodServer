const express = require("express");
const router = express.Router();
const register = require("./registerRestaurants");
const login = require("../restaurants/loginRestaurants");
const menu = require("../restaurants/menus");
const resUpdate = require("../restaurants/editRestaurantInfo");
router.get("/", (req, res) => {
  res.send("ok");
});
router.use("/register", register);
router.use("/login", login);
router.use("/menus", menu);
router.use("/update", resUpdate);
module.exports = router;
