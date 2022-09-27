const invoiceItemSchema = require('../models/InvoiceItem')
const addInvoiceItem = async (req, res) => {
  try {
    const invoiceItem = await invoiceItemSchema.create(req.body)
    res.status(200).json({
      msg: 'invoiceItem created',
      data: invoiceItem
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getInvoiceItem = async (req, res) => {
  try {
    const invoiceItems = await invoiceItemSchema.find()
    res.status(200).json({
      invoiceItems
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getInvoiceItemById = async (req, res) => {
  const { id } = req.params
  try {
    const invoiceItem = await invoiceItemSchema.findById(id)
    return res.status(200).json({
      invoiceItem
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateInvoiceItem = async (req, res) => {
  const { id } = req.params
  try {
    const invoiceItem = await invoiceItemSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'invoiceItem updated',
      invoiceItem
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating invoiceItem'
    })
  }
}
const deleteInvoiceItem = async (req, res) => {
  const { id } = req.params
  try {
    const invoiceItem = await invoiceItemSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'invoiceItem deleted',
      invoiceItem
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

module.exports = {
  addInvoiceItem,
  getInvoiceItem,
  getInvoiceItemById,
  updateInvoiceItem,
  deleteInvoiceItem
}
