const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const router = require('./routes/indexRouter')

// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'shop-api',
      version: '1.0.0'
    },
    servers: [
      {
        // url: 'https://express-shopapi.herokuapp.com/',
        url: 'http://localhost:9000/'
      }
    ]
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`]
}

// settings
const app = express()
const PORT = process.env.PORT || 9000

// middlewares
app.use(express.json())
router(app)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
app.get('/', (req, res) => {
  res.send('Welcome Shop Team API')
})

// mongodb
const MONGODB = process.env.MONGODB_URI

mongoose
  .connect(MONGODB)
  .then(() => console.log('connected to mongodb'))
  .catch((error) => console.error(error))

// server listening
app.listen(PORT, () => console.log('Server listening to', PORT))
