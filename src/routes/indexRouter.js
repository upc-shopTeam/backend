const productRoute = require('./product')
const ownerRoute = require('./owner')
const categoryRoute = require('./category')
const employeeRoute = require('./employee')
const invoiceRoute = require('./invoice')
const userRoute = require('./user')
const authRoute = require('./auth')
const saleRoute = require('./sale')
const routes = (app) => {
  app.use('/api/products', productRoute)
  app.use('/api/owner', ownerRoute)
  app.use('/api/category', categoryRoute)
  app.use('/api/employee', employeeRoute)
  app.use('/api/invoices', invoiceRoute)
  app.use('/api/users', userRoute)
  app.use('/api/auth', authRoute)
  app.use('/api/sale', saleRoute)
}

module.exports = routes
