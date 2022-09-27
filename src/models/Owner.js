const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
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
  }
})

module.exports = mongoose.model('Owners', ownerSchema)
