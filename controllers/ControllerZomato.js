const ZOMATO_API_KEY = process.env.ZOMATO_API_KEY;
const axios = require('axios');

class ControllerZomato {
    static categories(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/categories',
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static cities(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/cities?q=' + req.params.city,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static collections(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/collections?city_id=' + req.params.city_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static cuisines(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + req.params.city_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static establishments(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/establishments?city_id=' + req.params.city_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static geocode(req, res) {
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
            res.status(500).json(err)
        })
    }

    static location_details(req, res) {
        axios.get(
            `https://developers.zomato.com/api/v2.1/location_details?entity_type=${req.params.entity_type}&entity_id=${req.params.entity_id}`,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static locations(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/locations?query=' + req.params.keyword,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static dailymenu(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/dailymenu?res_id=' + req.params.res_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static restaturant(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + req.params.res_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static reviews(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/reviews?res_id=' + req.params.res_id,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }

    static search(req, res) {
        axios.get(
            'https://developers.zomato.com/api/v2.1/search?q=' + req.params.keyword,
            {
                headers: {
                    'user_key': ZOMATO_API_KEY
                }
            }
        ).then(response => {
            res.status(201).json(response.data);
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = ControllerZomato;