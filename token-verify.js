const jsonwebtoken = require('jsonwebtoken')

const secret = 'myCat'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJvd25lciIsImlhdCI6MTY2NzUwMjY1Mn0.jy_WNgC43Z2OwzL6JzHwIjtVk319V08yZ8gjvjjiYJs'

function verifyToken (token, secret) {
  return jsonwebtoken.verify(token, secret)
}
const payload = verifyToken(token, secret)
console.log(payload)
