const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
  name: {
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
  nameShop: {
    type: String,
    require: true
  },
  photo: {
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
  registerDate: {
    type: Date,
    require: true
  }
})
module.exports = mongoose.model('Owner', ownerSchema)
