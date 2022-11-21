const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  hireDate: {
    type: String,
    require: true
  },
  photo: {
    type: String,
    require: true
  },
  dni: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})
module.exports = mongoose.model('Employees', employeeSchema)
