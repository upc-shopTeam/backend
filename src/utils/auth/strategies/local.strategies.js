const { boom } = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { Strategy } = require('passport-local')
const userController = require('../../../controllers/userController')
// const ownerController = require('../../../controllers/ownerController')
const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const user = await userController.findByEmail(email)
    if (!user) {
      done(boom.unauthorized(), false)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      done(boom.unauthorized(), false)
    }
    done(null, user)
  } catch (e) {
    done(e, false)
  }
})

module.exports = LocalStrategy
