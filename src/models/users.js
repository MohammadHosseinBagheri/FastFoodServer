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
  },
  tag:{
    type:String,
    default:'user'
  }
});
module.exports = mongoose.model("users", userSchema);
