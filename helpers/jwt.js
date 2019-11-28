const jwt = require('jsonwebtoken')

function generateToken(payload) { // Autentifikasi
  return jwt.sign(payload, process.env.JWT_SECRET)
}

function verifyToken(token) {	// Autorisasi
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generateToken, verifyToken }