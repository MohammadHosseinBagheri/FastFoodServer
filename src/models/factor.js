const mongoose = require("mongoose");
const factorSchema = mongoose.Schema({
  price: {
    type: Number
  },
  time: {
    type: Date
  },
  messegae: {
    type: String,
    default: "راننده خوب بود"
  },
  address: {
    type: String,
    default: "دانشگاه شهید باهنر کرمان"
  },
  personId: {
    type: String
  },
  personName: {
    type: String
  },
  status: {
    type: Number,
    default: -1
  },
  maghsad:{
    type:Object
  }
});
module.exports = mongoose.model("factor", factorSchema);
