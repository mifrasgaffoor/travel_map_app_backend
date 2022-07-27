const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//Register

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      res.status(400).json(error);
    }
    //genarate password
    const salt = await bcrypt.genSaltSync(10);

    //hash password
    const hashPassword = await bcrypt.hash(password, salt);

    console.log(hashPassword);
    //save user

    const newUser = await new User({
      username,
      email,
      password: hashPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findEmail = await User.findOne({ email });

    if (!findEmail) {
      return res.status(400).json({ error: "**This email does not exist**" });
    }

    const decodePassword = await bcrypt.compare(password, findEmail.password);
    if (!decodePassword) {
      return res.status(400).json({ error: "**wrong password**" });
    }
    res.status(200).json({ _id: findEmail._id, username: findEmail.username });
  } catch (error) {}
});

module.exports = router;
