const mongoose = require('mongoose')
const { ilogger } = require("./logger")

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI)

// When successfully connected
mongoose.connection.on('connected', () => {
  ilogger.info(`Mongoose connection is opened to: ${mongoURI}`)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  ilogger.info('Mongoose connection disconnected')
})

module.exports = mongoose