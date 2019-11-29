const router = require('express').Router()
const currenyController = require('../controllers/currencyController')




router.get('/getcurrencyrate/?', currenyController.getCurrencyRate)
router.get('/getcurrencyrateall', currenyController.getCurrencyRate)


module.exports = router