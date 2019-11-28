'use strict'

const { verifyToken } = require('../helpers/jwt')
const User = require('../models/user')

function authentication(req, res, next) {
  let token = req.headers.token 	// simpan header token di variable token
  try {
    const decoded = verifyToken(token) 	// verify token
    User
      .findById({ _id: decoded.id }) 	// cari apakah ada
      .then(user => {
        if (user) {
          req.decoded = user
          next()
        }
      })
      .catch(err => { next(err) })
  } catch (err) {
    next(err)
  }
}

module.exports = { authentication }