const express = require("express");
const messageModel = require("../../src/models/message");
const router = express.Router();
router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  const restaurantData = data.resData;
  const title = data.title;
  const message = data.message;
  const restaurantId = restaurantData.id;
  console.log(restaurantId);
  const newMessage = new messageModel({
    title: title,
    text: message,
    date: new Date(),
    restaurantId: restaurantId
  });
  newMessage.save();
  res.json({
    status: 200
  });
});
module.exports = router;
