const express = require("express");
const router = express.Router();
const menuModel = require("../../src/models/menus");

router.post("/", (req, res) => {
  const restaurantData = req.body.data;
  const restaurantId = restaurantData.id;
  console.log(req.body);
  console.log(restaurantId)
  menuModel.find({ restaurantId: restaurantId }, (error, data) => {
    if (error) {
      res.json({
        status: 400,
        message: error
      });
      return;
    }
    if (data) {
      console.log(data)
      res.json({
        data: data,
        status: 200,
        // restaurantData: restaurantData
      });
      return;
    }
    if (!data) {
      res.json({
        status: 404
      });
    }
  });
});

router.post("/addfood", (req, res) => {
  const data = req.body;
  console.log(data.restaurantId.id);
  const foodName = data.name;
  const tag = data.tag;
  const price = data.price;
  const description = data.description;
  const restaurantId = data.restaurantId.id;
  const newFood = new menuModel({
    name: foodName,
    price: price,
    description: description,
    tag: tag,
    restaurantId: restaurantId
  });
  newFood.save();
  res.json({
    status: 200,
    message: "باموفقیت ثبت شد"
  });
});

module.exports = router;
