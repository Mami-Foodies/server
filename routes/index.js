const router = require('express').Router()
const zomatoRouter = require('./routesZomato');
const userRouter = require('./userRouter')

router.use('/api/zomato', zomatoRouter);
router.use('/user', userRouter)

module.exports = router
