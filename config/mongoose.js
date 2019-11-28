const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI


mongoose.connect(mongoUri,{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err){
    if(err) console.log('failed to connect database')
    else console.log('success to connect mongoose')
})

module.exports = mongoose