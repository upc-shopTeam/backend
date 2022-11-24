const mongoose = require('mongoose')
const saleSchema = mongoose.Schema({
  amount: {
    type: Number,
    require: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
})
module.exports = mongoose.model('Sale', saleSchema)
