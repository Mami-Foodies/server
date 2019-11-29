const axios = require('axios')


class GmapController
{

    static getPlaceIdByPlaceName(req,res)
      {
        axios({
            method:'get',
            url:`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=central%20park%20jakarta&&inputtype=textquery&key=${process.env.GMAP_API_KEY}`
        })
        .then(result=>{
            console.log(result.data)
        })
        .catch(err=>{
            console.log(err)
            res.status(200).json(err)
        })

        
      }

      static getPlaceIdByLongLat(req,res)
      {
        console.log('req query',req.query)  
        console.log('latitude', req.query.latitude)
        console.log('longitude', req.query.longitude)
        axios({
            method:'get',
            url:`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${req.query.restname}&inputtype=textquery&locationbias=point:${req.query.latitude},${req.query.longitude}&key=${process.env.GMAP_API_KEY}`
        })
        .then(result=>{
            res.status(200).json(result.data.candidates[0].place_id)
        })
        .catch(err=>{
            console.log(err)
            res.status(200).json(err)
        })

        
      }

}

module.exports = GmapController