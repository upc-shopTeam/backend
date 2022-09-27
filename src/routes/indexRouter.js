const productRoute = require('./product')
const campusRoute = require('./campus')
const customerRoute = require('./customer')
const ownerRoute = require('./owner')
const shopRoute = require('./shop')
const categoryRoute = require('./category')
const employeeRoute = require('./employee')
const invoiceRoute = require('./invoice')
const invoiceItemRoute = require('./invoiceItem')
const routes = (app) => {
  app.use('/api/products', productRoute)
  app.use('/api/campus', campusRoute)
  app.use('/api/customers', customerRoute)
  app.use('/api/owner', ownerRoute)
  app.use('/api/shop', shopRoute)
  app.use('/api/category', categoryRoute)
  app.use('/api/employees', employeeRoute)
  app.use('/api/invoices', invoiceRoute)
  app.use('/api/invoiceItems', invoiceItemRoute)
}

module.exports = routes
