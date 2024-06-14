const express = require("express");
const upload = require("../middleware/multerconfig.js");
const {
  createProduct,
  getAllProduct,
  getProductById,
  uploadProductImage,
  updateProduct,
  deleteProduct,
  softDeleteProduct,
} = require("../controller/productController.js");

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getAllProduct", getAllProduct);
router.get("/getProductById/:id", getProductById);
router.put(
  "/uploadProductImage/:id",
  upload.single("productImage"),
  uploadProductImage
);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/softDeleteProduct/:id", softDeleteProduct);

module.exports = router;
