'use strict'

const router = require('express').Router()
const userRouter = require('../controllers/userController')
const googleVerify = require('../middlewares/googleVirify')

router.post('/signin', userRouter.signIn)
router.post('/signin/google', userRouter.signInGoogle)
router.post('/register', googleVerify, userRouter.register)

module.exports = router