'use strict'

const { verifyToken } = require('../helpers/jwt')
const User = require('../models/user')

function authentication(req, res, next) {
  let token = req.headers.token
  try {
    const decoded = verifyToken(token)
    User
      .findById({ _id: decoded.id })
      .then(user => {
        if (user) {
          req.decoded = user
          next()
        }
      })
      .catch(next)
  } catch (err) {
    next(err)
  }
}

module.exports = { authentication }