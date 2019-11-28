'use strict'

const router = require('express').Router()
const userRouter = require('../controllers/userController')
const googleVerify = require('../middlewares/googleVirify')

router.post('/login', userRouter.signIn)
router.post('/signin/google', googleVerify, userRouter.signInGoogle)
router.post('/register', userRouter.register)

module.exports = router