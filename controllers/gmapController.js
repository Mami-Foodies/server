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
        axios({
            method:'get',
            url:`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%22%22%20jakarta&&inputtype=textquery&locationbias=point:-6.260721,106.781634&key=${process.env.GMAP_API_KEY}`
        })
        .then(result=>{
            console.log(result.data)
        })
        .catch(err=>{
            console.log(err)
            res.status(200).json(err)
        })

        
      }

}

module.exports = GmapController