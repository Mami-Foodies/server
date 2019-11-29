const ZOMATO_API_KEY = process.env.ZOMATO_API_KEY;
const axios = require('axios');

class ControllerZomato {
    static categories(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/categories',
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static cities(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/cities?q=' + req.params.city,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static collections(req, res,next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/collections?city_id=' + req.params.city_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static cuisines(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + req.params.city_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static establishments(req, res) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/establishments?city_id=' + req.params.city_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static geocode(req, res, next) {
        axios({
            url: `https://developers.zomato.com/api/v2.1/geocode?lat=${req.params.lat}&lon=${req.params.lon}`,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static location_details(req, res, next) {
        axios({
            url: `https://developers.zomato.com/api/v2.1/location_details?entity_type=${req.params.entity_type}&entity_id=${req.params.entity_id}`,
            method: "GET",
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static locations(req, res,next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/locations?query=' + req.params.keyword,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static dailymenu(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/dailymenu?res_id=' + req.params.res_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static restaturant(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + req.params.res_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err)
        })
    }

    static reviews(req, res, next) {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=' + req.params.res_id,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            next(err)
        })
    }

    static search(req, res, next) {
        let {place} = req.body
        let keyword = place.split(' ').join('')
        axios({
            url: `https://developers.zomato.com/api/v2.1/search?q=${keyword}`,
            method: 'GET',
            headers:{
                user_key: ZOMATO_API_KEY
            }
        })
        .then(({data}) => {
            let restaurants = data.restaurants
            let resto = []
            restaurants.forEach(data => {
                if(data.restaurant.thumb !== ''){
                    resto.push(data.restaurant)
                }
            });
            res.status(201).json(resto);
        }).catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerZomato;