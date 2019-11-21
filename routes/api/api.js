const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const restaurants = require("../../src/models/restaurants");
const places = require("../../src/models/addPlaces");
const categories = require("../../src/models/addCategories");
const loginAuth = require("../../src/models/loginAuth");
const menus=require('../../src/models/addMenu');
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.get("/restaurants", (req, res) => {
  restaurants.find({}, (error, data) => {
    res.json(data);
  });
});
router.get("/places", (req, res) => {
  places.find({}, (error, data) => {
    res.json(data);
  });
});
router.get("/categories", (req, res) => {
  categories.find({}, (error, data) => {
    res.json(data);
  });
});
router.get("/menu", (req, res) => {
  menus.find({}, (error, data) => {
    res.json(data);
  });
});
router.post("/login/users", (req, res) => {
  const phone1 = req.body.phone;
  loginAuth.findOne({ phone: phone1 }, (error, data) => {
    if (data) {
      res.json({
        status: 200,
        phone: data
      });
      return;
    } else {
      res.json({
        status: 404
      });
    }
  });
});
module.exports = router;
