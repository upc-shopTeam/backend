const productSchema = require('../models/Product')
const addProduct = async (req, res) => {
  try {
    const product = await productSchema.create(req.body)
    res.status(200).json({
      msg: 'Product created',
      data: product
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getProducts = async (req, res) => {
  try {
    const products = await productSchema.find()
    res.status(200).json({
      products
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await productSchema.findById(id)
    return res.status(200).json({
      product
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const updateProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await productSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'product updated',
      product
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating product'
    })
  }
}
const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await productSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'Product deleted',
      product
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
