const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    unique:true
  }
});
module.exports = mongoose.model("users", userSchema);
