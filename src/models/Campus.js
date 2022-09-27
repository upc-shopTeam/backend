
const mongoose = require('mongoose')

const campusSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  }
})
module.exports = mongoose.model('Campus', campusSchema)
