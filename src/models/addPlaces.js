const mongoose = require("mongoose");
const places = mongoose.Schema({
  name: { type: String }
});
module.exports = mongoose.model("places", places);
