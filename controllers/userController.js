'use strict'

const User = require('../models/user')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class userController {
  static signIn(req, res, next) {
    console.log(req.body)
    let value = { email: req.body.email }
    User
      .findOne(value)
      .then(userData => {
        if (comparePassword(req.body.password, userData.password)) {
          let token = generateToken({ id: userData.id })
          let user = {
            username: userData.username,
            email: userData.email,
            currency: userData.currency
          }
          let data = { user, token }
          res.status(200).json(data)
        } else {
          throw ({ status: 404, message: 'Password / Username is wrong' })
        }
      })
      .catch(next)
  }

  static signInGoogle(req, res, next) {

  }

  static register(req, res, next) {
    let { username, email, password } = req.body
    User
      .create({
        username,
        email,
        password,
        currency: 'IDR'
      })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(next)
  }
}

module.exports = userController