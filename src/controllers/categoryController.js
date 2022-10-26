const categorySchema = require('../models/Category')
const productSchema = require('../models/Product')
const addCategory = async (req, res) => {
  try {
    const category = await categorySchema.create(req.body)
    res.status(200).json({
      msg: 'Category created',
      data: category
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find()
    res.status(200).json(
      categories
    )
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCategoryById = async (req, res) => {
  const { id } = req.params
  try {
    const category = await categorySchema.findById(id)
    return res.status(200).json({
      category
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateCategory = async (req, res) => {
  const { id } = req.params
  try {
    const category = await categorySchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'category updated',
      category
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating category'
    })
  }
}
const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    const campus = await categorySchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'category deleted',
      campus
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getProductsByCategoryId = async (req, res) => {
  const { id } = req.params
  try {
    const products = await productSchema.find({ category: id })
    return res.status(200).json(
      products
    )
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}
module.exports = {
  addCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getProductsByCategoryId
}
