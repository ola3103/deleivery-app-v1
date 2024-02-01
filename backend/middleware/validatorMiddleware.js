const validator = require("validator");
const CustomError = require("../error/customError");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    throw new CustomError("Please provide all fields", 400);
  }
  if (!validator.isEmail(email)) {
    throw new CustomError("Please provide valid email", 400);
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new CustomError("User already exist");
  }
  if (password.length <= 6) {
    throw new CustomError("Password must be greater than 6 characters");
  }

  next();
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError("Please provide all fields", 400);
  }
  if (!validator.isEmail(email)) {
    throw new CustomError("Please provide valid email", 400);
  }
  const userExist = await User.findOne({ email });
  if (!userExist) {
    throw new CustomError("Invalid email or password", 400);
  }
  const passwordCorrect = await bcrypt.compare(password, userExist.password);
  if (!passwordCorrect) {
    throw new CustomError("Invalid email or password", 400);
  }
  next();
};
