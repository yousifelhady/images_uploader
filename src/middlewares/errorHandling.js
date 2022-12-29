const errorHandlerMiddleware = (err, req, res, next) => {
    if (!err) return next()
    const payload = Object.assign(
      {},
      err.output.payload,
      err.data && err.data,
    { stack: err.stack }
    )
  
    return res.status(err.output.statusCode).json(payload)
}

module.exports = {
    errorHandlerMiddleware
}