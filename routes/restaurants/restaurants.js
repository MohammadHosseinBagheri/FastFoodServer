const express = require("express");
const router = express.Router();
const register = require("./registerRestaurants");
router.get("/", (req, res) => {
  res.send("ok");
});
router.use("/register", register);
module.exports = router;
