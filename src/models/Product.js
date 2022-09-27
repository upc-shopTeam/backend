const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  unitePrice: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  stock: {
    type: Number,
    require: true
  },
  img: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Product', productSchema)
