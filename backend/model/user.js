const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    unique: [true, "Email already exist"],
    validate: {
      validator: validator.isEmail,
      message: (props) =>
        `${props.value} is not a valid email, please provide a valid email`,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [6, "Password must be greater than 6 characters"],
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
