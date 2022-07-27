const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      require: true,
      max: 30,
      unique: true,
    },

    password: {
      type: String,
      require: true,
      min: 3,
    },
  },
  {
    timeseries: true,
  }
);

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;
