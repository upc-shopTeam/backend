const mongoose = require('mongoose')

const invoiceItemSchema = mongoose.Schema({

  quantity: {
    type: Number,
    require: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice'
  }

})
module.exports = mongoose.model('InvoiceItems', invoiceItemSchema)
