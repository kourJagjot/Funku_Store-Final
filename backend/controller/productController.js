const Product = require("../modals/productModal");
const multer = require("multer");

const createProduct = async (req, res) => {
  const {
    productName,
    desc,
    price,
    itemNumber,
    Category,
    license,
    productType,
    imagrUrl,
  } = req.body;

  if (
    !productName ||
    !desc ||
    !price ||
    !itemNumber ||
    !Category ||
    !license ||
    !productType ||
    !imagrUrl
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = new Product({
    productName,
    desc,
    price,
    itemNumber,
    Category,
    license,
    productType,
    imagrUrl,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const productData = await Product.find({ is_deleted: false });
    if (!productData) {
      return res.status(404).json({ msg: "Product Data Not Found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const productExists = await Product.findOne({ _id: id, is_deleted: false });
    if (!productExists) {
      return res.status(404).json({ msg: "Product Not Found" });
    }
    res.status(200).json(productExists);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const uploadProductImage = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded");
    }

    const imagePath = file.filename;
    product.productImage = imagePath;

    await product.save();
    return res.status(201).send("File uploaded successfully");
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).send("Multer Error: " + error.message);
    }

    console.error("Error uploading file:", error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const {
    productName,
    desc,
    price,
    itemNumber,
    Category,
    license,
    productType,
  } = req.body;
  // if (!userName || !firstName || !lastName || !email) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        productName,
        desc,
        price,
        itemNumber,
        Category,
        license,
        productType,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ msg: "Product Not Found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const softDeleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ msg: "Product Not Found" });
    }

    const product = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          is_deleted: true,
        },
      },
      { new: true }
    );
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createProduct: createProduct,
  getAllProduct: getAllProduct,
  getProductById: getProductById,
  uploadProductImage: uploadProductImage,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  softDeleteProduct: softDeleteProduct,
};
