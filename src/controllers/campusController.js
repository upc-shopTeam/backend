const campusSchema = require('../models/Campus')
const productSchema = require('../models/Product')
const employeeSchema = require('../models/Employee')
const addCampus = async (req, res) => {
  try {
    const campus = await campusSchema.create(req.body)
    res.status(200).json({
      msg: 'Campus created',
      data: campus
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCampus = async (req, res) => {
  try {
    const campus = await campusSchema.find()
    res.status(200).json(
      campus
    )
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCampusById = async (req, res) => {
  const { id } = req.params
  try {
    const campus = await campusSchema.findById(id)
    return res.status(200).json(
      campus
    )
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateCampus = async (req, res) => {
  const { id } = req.params
  try {
    const campus = await campusSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'campus updated',
      campus
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating campus'
    })
  }
}
const deleteCampus = async (req, res) => {
  const { id } = req.params
  try {
    const campus = await campusSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'campus deleted',
      campus
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getProductsByCampusId = async (req, res) => {
  const { id } = req.params
  try {
    const products = await productSchema.find({ campus: id })
    return res.status(200).json(
      products
    )
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}
const getEmployeesByCampusId = async (req, res) => {
  const { id } = req.params
  try {
    const employees = await employeeSchema.find({ campus: id })
    return res.status(200).json(
      employees
    )
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}
module.exports = {
  addCampus,
  getCampus,
  getCampusById,
  updateCampus,
  deleteCampus,
  getProductsByCampusId,
  getEmployeesByCampusId
}
