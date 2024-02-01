const validator = require("validator");
const CustomError = require("../error/customError");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.signUpUser = async (req, res) => {
  const user = await User.create({ ...req.body });

  const tokenObj = { userId: user._id };
  const token = jwt.sign(tokenObj, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.status(201).json({ message: "user created" });
};

exports.signInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError("Invalid credentials", 400);
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.status(200).json({ message: "user logged in" });
};
