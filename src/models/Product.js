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
  img: {
    type: String,
    require: true
  },
  campus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus'
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  initialAmount: {
    type: Number,
    require: true
  },
  currentAmount: {
    type: Number,
    require: true
  },
  date: {
    date: {
      type: Date,
      require: true
    }
  },
  purchasePrice: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Products', productSchema)
