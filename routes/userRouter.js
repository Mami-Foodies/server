'use strict'

const router = require('express').Router()
const userRouter = require('../controllers/userController')

router.post('/signin', userRouter.signIn)
router.post('/signin/google', userRouter.signInGoogle)
router.post('/register', userRouter.register)

module.exports = router