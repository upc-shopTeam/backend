const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({

  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  },
  nameCustomer: {
    type: String,
    require: true
  },
  dniCustomer: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  sales: {
    type: [{
      nameProduct: {
        type: String
      },
      amount: {
        type: Number
      },
      unitPrice: {
        type: Number
      },
      subTotal: {
        type: Number
      }
    }]
  },
  totalPayment: {
    type: Number,
    require: false
  },
  nameEmployee: {
    type: String,
    require: true
  }
})
module.exports = mongoose.model('Invoices', invoiceSchema)
