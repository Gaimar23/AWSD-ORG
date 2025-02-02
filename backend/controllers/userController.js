import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

//
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "this user doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong email or password" });
    }

    const token = createToken(user._id);
    let status = false;

    if (user.status === "admin") {
      status = true;
    }

    return res.json({
      success: true,
      token,
      info: [status, user.name, user.phone, user.email],
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking if user already exist
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // validation of the user email and password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      res.json({
        success: false,
        message: "The password can't be less than 8 characters",
      });
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "An error occured" });
  }
};

// checking status
const checkStatus = async () => {};

// Getting user
const getUser = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId.id });
    let info = [userData.status, userData.name, userData.phone, userData.email];
    return res.json({ success: true, info });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser, getUser };
