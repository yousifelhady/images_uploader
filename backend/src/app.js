const express = require("express")
require("dotenv").config()
require("./config/connectMongoose")
const swaggerUi = require("swagger-ui-express")
const openApi = require("./openAPI")
const { errors } = require("celebrate")
const { errorHandlerMiddleware } = require("./middlewares/errorHandling")
const { ilogger } = require("./config/logger")

const port = 8080
var app = express()

app.use(express.json())

app.use("/", require("./routes/health"))
app.use("/images", require("./routes/images"))
app.use("/groups", require("./routes/groups"))
app.use("/", swaggerUi.serve, swaggerUi.setup(openApi))

/* Middleware to return celebrate validation errors as
   Bad Request (400) instead of Internal Server Error (500)
   it must be placed after routes
*/
app.use(errors())
app.use(errorHandlerMiddleware)

app.listen(port, () => {
    ilogger.info(`Application started! App is listening to: localhost:${port}`)
});

module.exports = app