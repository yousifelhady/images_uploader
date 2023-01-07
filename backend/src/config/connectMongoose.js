const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connection is opened to: ${mongoURI}`)
})
  
// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected')
})
  
module.exports = mongoose