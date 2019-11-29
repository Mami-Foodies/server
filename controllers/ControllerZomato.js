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
        axios.get(
            `https://developers.zomato.com/api/v2.1/geocode?lat=${req.params.lat}&lon=${req.params.lon}`,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
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
        console.log(req.body)
        console.log('masuk sini ya')
        let keyword = req.body.place
        axios({
            url: 'https://developers.zomato.com/api/v2.1/search?count=8&q=' + keyword,
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
}

module.exports = ControllerZomato;