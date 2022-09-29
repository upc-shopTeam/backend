const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  photo: {
    type: String,
    require: true
  }

})
module.exports = mongoose.model('Customers', customerSchema)
