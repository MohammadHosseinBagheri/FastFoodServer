const mongoose = require("mongoose");
const factorSchema = mongoose.Schema({
  price: {
    type: Number
  },
  time: {
    type: Date
  },
  messegae: {
    type: String
  },
  address: {
    type: String
  },
  personId: {
    type: String
  }
});
module.exports = mongoose.model("factor", factorSchema);
