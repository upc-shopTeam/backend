const invoiceSchema = require('../models/Invoice')
const invoiceItemSchema = require('../models/InvoiceItem')
const addInvoice = async (req, res) => {
  try {
    const invoice = await invoiceSchema.create(req.body)
    res.status(200).json({
      msg: 'invoice created',
      data: invoice
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getInvoice = async (req, res) => {
  try {
    const invoices = await invoiceSchema.find()
    res.status(200).json({
      invoices
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getInvoiceById = async (req, res) => {
  const { id } = req.params
  try {
    const invoice = await invoiceSchema.findById(id)
    return res.status(200).json({
      invoice
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateInvoice = async (req, res) => {
  const { id } = req.params
  try {
    const invoice = await invoiceSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'invoice updated',
      invoice
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating invoice'
    })
  }
}
const deleteInvoice = async (req, res) => {
  const { id } = req.params
  try {
    const invoice = await invoiceSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'invoice deleted',
      invoice
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getInvoiceItemsByInvoiceId = async (req, res) => {
  const { id } = req.params
  try {
    const invoiceItems = await invoiceItemSchema.find({ invoice: id })
    return res.status(200).json({
      invoiceItems
    })
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}
module.exports = {
  addInvoice,
  getInvoice,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  getInvoiceItemsByInvoiceId
}
