const errorHandlerMiddleware = (err, req, res, next) => {
    if (!err) return next()
    var statusCode = 400
    var payload = null
    if (err.isBoom) {
        statusCode = err.output.statusCode
        payload = Object.assign({},
            err.output.payload,
            err.data && err.data,
            { stack: err.stack }
        )
    } else {
        payload = {
            error: err.message,
            stack: err.stack
        }
    }
    return res.status(statusCode).json(payload)
}

module.exports = {
    errorHandlerMiddleware
}