const router = require('express').Router()
const zomatoRouter = require('./routesZomato');
const userRouter = require('./userRouter')
const gmapRouter = require('./gmapRouter')
const currencyRouter = require('./currencyRouter')


router.use('/user', userRouter)
router.use('/api/zomato', zomatoRouter);
router.use("/api/gmap", gmapRouter)
router.use("/api/currency", currencyRouter);




module.exports = router
