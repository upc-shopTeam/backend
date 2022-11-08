const mongoose = require('mongoose')
const saleSchema = mongoose.Schema({
  amount: {
    type: Number,
    require: true
  },
  total: {
    type: Number,
    require: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  nameProduct: {
    type: String,
    require: true
  }
})
module.exports = mongoose.model('Sale', saleSchema)
