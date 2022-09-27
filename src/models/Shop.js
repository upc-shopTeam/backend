const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  ruc: {
    type: String,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  }
})

module.exports = mongoose.model('Shop', shopSchema)
