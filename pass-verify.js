const bcrypt = require('bcrypt')
async function verifyPassword () {
  const myPassword = 'admin123'
  const hash = '$2b$10$h9AJ/KjRiGqHm7ZL.ly/8uotfBD71ujLFUvnb/dd6lMxNoeVMRd7a'
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}
verifyPassword()
