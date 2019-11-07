const mongoose = require("mongoose");
const LoginAuthSchema = mongoose.Schema({
  phone: {
    type: String
  }
});
module.exports = mongoose.model("loginAuth", LoginAuthSchema);
