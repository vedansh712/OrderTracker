// **************************************************************
const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
// const validator = require("email-validator");
// need to remove this validator

const signin = async (req, res) => {
  let { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).send("Phone No is not registered ");
    }

    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(400).send("Invalid Password");
    }

    let token = jwt.sign(
      { _id: user._id },
      "thisismyseriectkeyandnooneknowsaboutit",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).send({
      token,
      username: user.username,
      phone: user.phone,
      id: user._id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    res.status(400).send("LogIn Failure");
  }
};

const register = async (req, res) => {
  let { username, phone, password } = req.body;
  try {
    if (!username) {
      return res.status(400).send("Username is required");
    }
    if (!phone || phone.length < 10 || phone.length > 10) {
      return res.status(400).send("Invalid Phone No");
    }
    if (!password || password.length < 6) {
      return res.status(400).send("Enter a valid password");
    }
    const userExist = await User.findOne({ phone });
    if (userExist) {
      return res.status(400).send("Phone No is already Registerd");
    }

    const user = new User({
      phone,
      username,
      password,
    });

    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    res.status(400).send("ERROR while creating the user");
  }
};

module.exports = { signin, register };
