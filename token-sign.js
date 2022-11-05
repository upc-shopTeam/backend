const jsonwebtoken = require('jsonwebtoken')

const secret = 'myCat'
const payload = {
  sub: 1,
  role: 'owner'
}

function signToken (payload, secret) {
  return jsonwebtoken.sign(payload, secret)
}
const token = signToken(payload, secret)
console.log(token)
