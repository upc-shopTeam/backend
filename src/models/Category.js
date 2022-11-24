const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Category', categorySchema)
