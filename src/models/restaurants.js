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
  }
});
module.exports = mongoose.model("restaurants", restaurantsSchema);
