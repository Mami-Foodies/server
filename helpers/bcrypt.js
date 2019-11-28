const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(11)

function hassedPassword(password) {
  return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hassedPassword) {
  return bcrypt.compareSync(password, hassedPassword)
}

module.exports = { hassedPassword, comparePassword }