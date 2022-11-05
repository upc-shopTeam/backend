const { ObjectId } = require('mongodb')
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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})
module.exports = mongoose.model('Owners', ownerSchema)
