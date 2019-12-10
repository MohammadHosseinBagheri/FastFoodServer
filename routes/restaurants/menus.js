const express = require("express");
const router = express.Router();
const menuModel = require("../../src/models/menus");

router.post("/", (req, res) => {
  const restaurantData = req.body.data;
  const restaurantId = restaurantData.id;
  console.log(req.body);
  console.log(restaurantId);
  menuModel.find({ restaurantId: restaurantId }, (error, data) => {
    if (error) {
      res.json({
        status: 400,
        message: error
      });
      return;
    }
    if (data) {
      console.log(data);
      res.json({
        data: data,
        status: 200
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
  if(data.tag==""){
    var tag = 'برگر';
  }else{
    var tag = data.tag;
  }
  
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

router.post("/categories", (req, res) => {
  const name = req.body.name;
  console.log(name);
  if (name == "همبر") {
    let tagName = "برگر";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
  if (name == "پیتزا") {
    let tagName = "پیتزا";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
  if (name == "کباب") {
    let tagName = "کباب";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
  if (name == "سنتی") {
    let tagName = "سنتی";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
  if (name == "سالاد") {
    let tagName = "سالاد";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
  if (name == "نوشیدنی") {
    let tagName = "نوشیدنی";
    menuModel.find({ tag: tagName }, (error, data) => {
      if (error) {
        res.json({
          error: error,
          status:400
        });
        return;
      } else if (!data) {
        res.json({
          message: "no item",
          status: 404
        });
        return;
      } else {
        res.json({
          data: data,
          status:200
        });
      }
    });
    return;
  }
});
module.exports = router;
