const productRoute = require('./product')
const campusRoute = require('./campus')
const customerRoute = require('./customer')
const routes = (app) => {
  app.use('/api/products', productRoute)
  app.use('/api/campus', campusRoute)
  app.use('/api/customers', customerRoute)
}

module.exports = routes
