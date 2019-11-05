const mongoose = require("mongoose");
const tst = mongoose.Schema({
  name: {
    type: String
  },
  description:{
      type:String
  }
});
module.exports = mongoose.model("res", tst);
