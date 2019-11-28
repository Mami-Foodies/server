const { Schema, model, models } = require('mongoose')
const { hassedPassword } = require('../helpers/bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, `name field required to be filled`]
  },
  email: {
    type: String,
    required: [true, `email field required to be filled`],
    validate: [{
      validator: (value) => {
        return models.User.findOne({ email: value })
          .then(member => {
            if (member) return false
          })
      },
      msg: `Email is already!`
    }, {
      validator: (value) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
      },
      msg: `Email is not valid!`
    }]
  },
  password: {
    type: String,
    required: [true, `email field required to be filled`]
  },
  currency: {
    type: String
  }
})

userSchema.pre('save', function (next) {
  let pass = hassedPassword(this.password)
  this.password = pass
  next()
})

const User = model('User', userSchema)
module.exports = User

