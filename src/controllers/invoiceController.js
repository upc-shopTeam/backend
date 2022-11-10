const invoiceSchema = require('../models/Invoice')
const createInvoice = async (req, res) => {
  try {
    const invoice = await invoiceSchema.create(req.body)
    res.status(200).json({
      msg: 'Invoice created',
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
    res.status(200).json(
      invoices
    )
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
    return res.status(200).json(
      invoice
    )
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

/* const getItemsByInvoiceId = async (req, res) => {
  const { id } = req.params
  const itemsInvoice = []
  const invoice = await invoiceSchema.findById(id)
  const array = invoice.sales
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const items = await saleSchema.findById(element)
    itemsInvoice.push(items)
  }
  try {
    res.status(200).json(
      itemsInvoice
    )
  } catch (error) {
    res.status(400).json({
      msg: error
    })
  }
} */

module.exports = {
  createInvoice,
  getInvoice,
  getInvoiceById,
  updateInvoice,
  deleteInvoice
  // getItemsByInvoiceId
}
