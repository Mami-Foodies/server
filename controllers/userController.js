'use strict'

const User = require('../models/user')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const generatePassword = require('../helpers/randomPassword')

class userController {
  static signIn(req, res, next) {
    let value = { email: req.body.email }
    User
      .findOne(value)
      .then(userData => {
        if(userData){
          let valid = comparePassword(req.body.password, userData.password)
          if(valid){
            let token = generateToken({ id: userData.id })
            let user = {
              username: userData.username,
              email: userData.email,
              currency: userData.currency
            }
            let data = { user, token }
            res.status(200).json(data)
          }else{
            throw ({ status: 404, message: 'Password / Username is wrong' })
          }
        }else{
          throw ({
            status: 400,
            message: 'Your email is not registered'
          })
        }
      })
      .catch(next)
  }

  static signInGoogle(req, res, next) {
    User.findOne({
      email: req.decoded.email
    })
      .then(userData => {
        if (userData) {
          let token = generateToken({ id: userData.id })
          let user = {
            username: userData.username,
            email: userData.email,
            currency: userData.currency
          }
          let data = { user, token }
          res.status(200).json(data)
        } else {
          return User.create({
            username: req.decoded.given_name,
            email: req.decoded.email,
            currency: 'IDR',
            password: generatePassword()
          })
        }
      })
      .then(userData => {
        if(userData){
          let token = generateToken({ id: userData.id })
          let user = {
            username: userData.username,
            email: userData.email,
            currency: userData.currency
          }
          let data = { user, token }
          res.status(200).json(data)
        }
      })
      .catch(next)
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
      .then(userData => {
        let user = {
          id: userData.id,
          username: userData.username,
          email: userData.email,
          currency: userData.currency
        }
        res.status(200).json(user)
      })
      .catch(next)
  }
}

module.exports = userController