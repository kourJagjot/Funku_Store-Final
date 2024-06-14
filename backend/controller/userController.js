const User = require("../modals/userModal.js");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const multer = require("multer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: "",
  },
});

const sendEmail = async (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

const generateOTP = () => {
  let digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

const JWT_SECRET = "QWERTY12345";

const create = async (req, res) => {
  const { userName, firstName, lastName, password, email, role } = req.body;
  console.log(req.body)
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(500).json({ message: "Email Already Exist!!!!!" });
  }
  if (!userName || !firstName || !lastName || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    userName,
    firstName,
    lastName,
    password: hashedPassword,
    email,
    role,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.is_deleted) {
      return res.status(401).json({ message: "This user is deleted" });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    user.token = token;
    await user.save();

    return res.json({
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const userData = await User.find({ is_deleted: false });
    if (!userData) {
      return res.status(404).json({ msg: "User Data Not Found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findOne({ _id: id, is_deleted: false });
    if (!userExists) {
      return res.status(404).json({ msg: "User Not Found" });
    }
    res.status(200).json(userExists);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const update = async (req, res) => {
  const userId = req.params.id;
  const { userName, firstName, lastName, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        userName,
        firstName,
        lastName,
        email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ msg: "User Not Found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const softDeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          is_deleted: true,
        },
      },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const otp = generateOTP();
  user.otp = otp;
  await user.save();
  console.log(`OTP for password reset: ${otp}`);

  const mailOptions = {
    from: "",
    to: user.email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset: ${otp}`,
  };

  try {
    await sendEmail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }

  const token = jwt.sign({ email: user.email, otp }, JWT_SECRET);

  user.token = token;
  await user.save();

  return res.status(200).json({ otp, token });
};

const verifyOTP = async (req, res) => {
  const { otp, token } = req.body;
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const email = decodedToken.email;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found in the database for email:", email);
      throw new Error("User not found");
    }

    console.log("User found in the database:", user);

    if (user.otp !== otp) {
      console.log("Invalid OTP:", otp);
      throw new Error("Invalid OTP");
    }

    user.otp = null;
    await user.save();

    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.log("Error verifying token:", error.message);
    return res.status(400).json({ message: "Invalid OTP or token" });
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({ message: "User not found" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.log("Error resetting password:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error changing password: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const uploadImage = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }

    const imagePath = file.filename;
    user.avatar = imagePath;

    await user.save();
    return res.status(201).send("File uploaded successfully");
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).send("Multer Error: " + error.message);
    }

    console.error("Error uploading file:", error);
    return res.status(500).send("Internal Server Error");
  }
};

const createPayment = async (req, res) => {
  const userId = req.params.id;
  const { address, country, city, zipcode, cardNumber, cvv, expDate } =
    req.body;
  try {
    const payUser = await User.findByIdAndUpdate(
      userId,
      {
        address,
        country,
        city,
        zipcode,
        cardNumber,
        cvv,
        expDate,
      },
      { new: true }
    );

    if (!payUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(payUser);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  create: create,
  login: login,
  getAlluser: getAllUser,
  getUserById: getUserById,
  update: update,
  deleteUser: deleteUser,
  softDeleteUser: softDeleteUser,
  forgotPassword: forgotPassword,
  verifyOTP: verifyOTP,
  resetPassword: resetPassword,
  changePassword: changePassword,
  uploadImage: uploadImage,
  createPayment: createPayment,
};
