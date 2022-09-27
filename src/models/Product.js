const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  unitPrice: {
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
  },
  campus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus'
  }
})

module.exports = mongoose.model('Products', productSchema)
