const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  customerId: {
    type: String,
    require: true
  },
  employeeId: {
    type: String,
    require: true
  },
  orderDate: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }

})
module.exports = mongoose.model('Orders', orderSchema)
