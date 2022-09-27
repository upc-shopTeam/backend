const employeeSchema = require('../models/Employee')
const invoiceSchema = require('../models/Invoice')

const addEmployee = async (req, res) => {
  try {
    const employee = await employeeSchema.create(req.body)
    res.status(200).json({
      msg: 'employee created',
      data: employee
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getEmployees = async (req, res) => {
  try {
    const employees = await employeeSchema.find()
    res.status(200).json({
      employees
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getEmployeeById = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await employeeSchema.findById(id)
    return res.status(200).json({
      employee
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await employeeSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'employee updated',
      employee
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating employee'
    })
  }
}
const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await employeeSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'employee deleted',
      employee
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getInvoiceByEmployeeId = async (req, res) => {
  const { id } = req.params
  try {
    const invoices = await invoiceSchema.find({ employee: id })
    return res.status(200).json({
      invoices
    })
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}

module.exports = {
  addEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  getInvoiceByEmployeeId
}
