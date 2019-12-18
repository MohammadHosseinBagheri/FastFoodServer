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
    type: String,
    unique: true
  },
  rate: {
    type: Number,
    default: 0
  },
  userManagement: {
    type: String,
  },
  latitude:{
    type:Number,
    default:0,
  },
  longitude:{
    type:Number,
    default:0,
  }
});
module.exports = mongoose.model("restaurants", restaurantsSchema);
