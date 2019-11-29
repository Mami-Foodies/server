const express = require('express');
const router = express.Router();
const ControllerZomato = require('../controllers/ControllerZomato');

//categories
router.get("/categories", ControllerZomato.categories);
//cities
router.get("/cities/:city", ControllerZomato.cities);
//collections
router.get("/collections/:city_id", ControllerZomato.collections);
//cuisines
router.get("/cuisines/:city_id", ControllerZomato.cuisines);
//establishments
router.get("/establishments/:city_id", ControllerZomato.establishments);
//geocode
router.get("/geocode/:lat/:lon", ControllerZomato.geocode);
//location_details
router.get("/location_details/:entity_type/:entity_id", ControllerZomato.location_details);
//locations
router.get("/locations/:keyword", ControllerZomato.locations);
//dailymenu
router.get("/dailymenu/:res_id", ControllerZomato.dailymenu);
//restaurant
router.get("/restaurant/:res_id", ControllerZomato.restaturant);
//reviews
router.get("/reviews/:res_id", ControllerZomato.reviews);
//search
router.get("/search", ControllerZomato.search);





module.exports = router;