const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const pinRoute = require("./routes/pin");
const userRoute = require("./routes/user");
app.use(express.json());

connectDB();

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server has been started");
});
