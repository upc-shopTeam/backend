const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  firstName: {
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
  photo: {
    type: String,
    require: true
  },
  numberPhone: {
    type: String,
    require: true
  }

})
module.exports = mongoose.model('Customers', customerSchema)
