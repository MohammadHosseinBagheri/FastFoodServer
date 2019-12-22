const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  date: {
    type: Date
  },
  restaurantId: {
    type: String
  }
});
module.exports = mongoose.model('message', messageSchema);
