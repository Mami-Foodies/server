// if(process.env.NODE_ENV === 'development'){
//     require('dotenv').config()
// }
require('dotenv').config()
// require database
require('./config/mongoose')

// require module
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

// build app
const app = express()

// use middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

// use routing
app.use(routes)

// errorhandler
app.use(errorHandler)


module.exports = app