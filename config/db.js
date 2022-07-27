const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connect = async () => {
  try {
    const connect = await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection error");
  }
};

module.exports = connect;
