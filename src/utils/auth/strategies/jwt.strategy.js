const { Strategy, ExtractJwt } = require('passport-jwt')
const secret = process.env.JWT_SECRET
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}
const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
})

module.exports = JwtStrategy
