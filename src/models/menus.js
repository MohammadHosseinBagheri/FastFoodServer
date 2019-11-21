const express = require("express");
const mongoose = require("mongoose");
const menuSchema = mongoose.Schema({
  name: {
    type: String
  },
  rate: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    require: true,
    default: 0
  },
  description: {
    type: String
  },
  tag: {
    type: String,
    require: true
  },
  restaurantId:{
    type:Number,
  }
});
module.exports = mongoose.model("menus", menuSchema);
