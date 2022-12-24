const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/images_uploader"

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