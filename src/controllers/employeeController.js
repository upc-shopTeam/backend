const employeeSchema = require('../models/Employee')
const invoiceSchema = require('../models/Invoice')
const bcrypt = require('bcrypt')
const userSchema = require('../models/User')

const addEmployee = async (req, res) => {
  const employee = req.body
  const pass = bcrypt.genSaltSync(10)
  employee.password = bcrypt.hashSync(employee.password, pass)
  try {
    const employee = await employeeSchema.create(req.body)
    const user = await userSchema.create(
      {
        email: employee.email,
        password: employee.password,
        role: 'employee',
        dataId: employee.id
      }

    )
    res.status(200).json({
      msg: 'user created',
      data: { employee, user }
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
    res.status(200).json(
      employees
    )
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
    return res.status(200).json(
      employee
    )
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
    return res.status(200).json(
      invoices
    )
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
