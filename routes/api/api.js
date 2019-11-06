const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const restaurants = require("../../src/models/addRestaurants");
const places = require("../../src/models/addPlaces");
const categories = require("../../src/models/addCategories");

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
module.exports = router;
