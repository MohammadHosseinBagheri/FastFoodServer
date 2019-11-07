const mongoose = require("mongoose");
const LoginAuthSchema = mongoose.Schema({
  phone: {
    type: Number
  }
});
module.exports = mongoose.model("loginAuth", LoginAuthSchema);
