const validator = require("validator");
const CustomError = require("../error/customError");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    throw new CustomError("Invalid Credentials", 401);
  }
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const currentUser = await User.findOne({ _id: payload.userId });
  if (!currentUser) {
    throw new CustomError("This user no longer exist", 400);
  }
  req.user = payload;
  next();
};

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

exports.logout = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) {
    throw new CustomError("Invalid Credentials");
  }
  res.cookie("auth_token", "logout", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  res.status(200).json({ message: "successfully logged out" });
};

exports.showMe = async (req, res) => {
  res.status(200).json({ message: "Show Me Worked" });
};
