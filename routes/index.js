const router = require('express').Router()
const zomatoRouter = require('./routesZomato');

router.use("/api/zomato", zomatoRouter);

module.exports = router