const winston = require('winston');

const ilogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: process.env.SERVICE },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'info.log' })
  ],
});

const elogger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: process.env.SERVICE },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' })
  ],
});

module.exports = {
  ilogger, elogger
}