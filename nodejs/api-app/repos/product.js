const product = require("../models/product");

const addPrduct = (data) => {
  console.log(data);

  return product.create(data);
};
const updateProduct = (id, data) => {
  return product.findOneAndUpdate({ productId: id }, data, { upsert: true });
};
const getAllProducts = () => {
  return product.find({});
};
const getProductById = (id) => {
  return product.findOne({ productId: id });
};
const removeProduct = (id) => {
  return product.findOneAndRemove({ productId: id });
};

module.exports = {
  addPrduct,
  removeProduct,
  updateProduct,
  getAllProducts,
  getProductById,
};
