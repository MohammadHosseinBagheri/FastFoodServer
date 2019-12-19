const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  nationalCode: {
    type: String,
    unique: true
  },
  pelak: {
    type: String,
    unique: true
  },
  phone: {
    type: String
  },
  rate: {
    type: Number,
    default: 0
  },
  restaurantId: {
    type: String
  }
});
module.exports = mongoose.model("driver", driverSchema);
