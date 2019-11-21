const mongoose = require("mongoose");
const restaurantsSchema = mongoose.Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  manageName: {
    type: String
  },
  managePhone: {
    type: String
  },
  id: {
    type: Number,
    unique: true
  },
  rate: {
    type: Number,
    default: 0
  },
  userManagement: {
    type: String,
    default: null
  }
});
module.exports = mongoose.model("restaurants", restaurantsSchema);
