const axios = require('axios')
require('dotenv').config()

class CurrencyController
{

    static getCurrencyRate(req,res)
      {

        axios({
            method:'get',
            url: `http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`
        })
        .then(result=>{
            const allRate = result.data.rates
            // console.log("TCL: allRate", allRate)
            let resData
            if(req.query)
              {  
                resData = Number((req.query.price * ((1/allRate[req.query.convertFrom]) / (1/allRate[req.query.convertInto]) ) ).toFixed(2) )
              }
            else
              {
                resData = allRate
              }
            res.status(200).json(resData)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })


      }


}


module.exports = CurrencyController