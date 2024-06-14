const express = require("express");
const {
  create,
  login,
  update,
  deleteUser,
  softDeleteUser,
  forgotPassword,
  verifyOTP,
  resetPassword,
  changePassword,
  uploadImage,
  getAlluser,
  getUserById,
  createPayment,
} = require("../controller/userController.js");
const upload = require("../middleware/multerconfig.js");

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.get("/getall", getAlluser);
router.get("/getbyid/:id", getUserById);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);
router.delete("/softDeleteUser/:id", softDeleteUser);
router.post("/verifyOTP", verifyOTP);
router.post("/resetPassword", resetPassword);
router.post("/changePassword", changePassword);
router.put("/uploadImage/:id", upload.single("avatar"), uploadImage);
router.post("/createPayment/:id", createPayment);

module.exports = router;
