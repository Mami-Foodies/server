const router = require('express').Router()
const gmapController = require('../controllers/gmapController')



router.get('/getplaceidbyplacename', gmapController.getPlaceIdByPlaceName)
router.get('/getplaceidbylonglat/?', gmapController.getPlaceIdByLongLat)


module.exports = router