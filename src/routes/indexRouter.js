const productRoute = require('./product')
const campusRoute = require('./campus')
const routes = (app) => {
  app.use('/api/products', productRoute)
  app.use('/api/campus', campusRoute)
}

module.exports = routes
