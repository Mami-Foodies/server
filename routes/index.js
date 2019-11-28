const router = require('express').Router()
<<<<<<< HEAD
const zomatoRouter = require('./routesZomato');
const userRouter = require('./userRouter')

router.use("/api/zomato", zomatoRouter);
=======
const userRouter = require('./userRouter')

>>>>>>> 84b3c58fc5eba6fbab892a1da057c941a8bee2cf
router.use('/user', userRouter)

module.exports = router
