const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
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
  password: {
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
  phoneNumber: {
    type: String,
    require: true
  },
  campus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus'
  }

})
module.exports = mongoose.model('Employees', employeeSchema)
