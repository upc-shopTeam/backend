const customerSchema = require('../models/Customer')
const invoiceSchema = require('../models/Invoice')
const addCustomer = async (req, res) => {
  try {
    const customer = await customerSchema.create(req.body)
    res.status(200).json({
      msg: 'customer created',
      data: customer
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCustomer = async (req, res) => {
  try {
    const customers = await customerSchema.find({})
    res.status(200).json(
      customers
    )
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getCustomerById = async (req, res) => {
  const { id } = req.params
  try {
    const customer = await customerSchema.findById(id)
    return res.status(200).json(
      customer
    )
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateCustomer = async (req, res) => {
  const { id } = req.params
  try {
    const customer = await customerSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'customer updated',
      customer
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating customer'
    })
  }
}
const deleteCustomer = async (req, res) => {
  const { id } = req.params
  try {
    const customer = await customerSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'customer deleted',
      customer
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getInvoicesByCustomerId = async (req, res) => {
  const { id } = req.params
  try {
    const invoices = await invoiceSchema.find({ customer: id })
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
  addCustomer,
  getCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getInvoicesByCustomerId
}
