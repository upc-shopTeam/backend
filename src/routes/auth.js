const express = require('express')
const passport = require('passport')
const jsonwebtoken = require('jsonwebtoken')

const router = express.Router()

router.post('/sign-in',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        id: user.id,
        role: user.role,
        dataId: user.dataId
      }
      const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET)
      res.json({
        user,
        token
      })
    } catch (e) {
      next(e)
    }
  })

module.exports = router
