const express = require("express");
const router = express.Router();
const restaurantsModel = require("../../src/models/restaurants");

router.post("/", (req, res) => {
  const data = req.body;
  const user = data.user;
    console.log(data);
  restaurantsModel.findOne({ userManagement: user }, (error, data) => {
    if (error) {
      res.json({
        status: 400,
        error: error
      });
      return;
    }
    if (data) {
      res.json({
        data: data,
        status: 200
      });
    }
    if (!data) {
      res.json({
        status: 404,
        message: "رستوران با این نام کاربری ثبت نشده است"
      });
    }
  });
});

module.exports = router;
