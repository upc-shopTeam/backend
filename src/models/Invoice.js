const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({

  date: {
    type: String,
    require: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }

})
module.exports = mongoose.model('Invoices', invoiceSchema)
