const express = require("express")
require("./config/connectMongoose")
const { errors } = require("celebrate")

const port = 8080
var app = express()

app.use(express.json())

app.use("/", require("./routes/health"))
app.use("/images", require("./routes/images"))
app.use("/groups", require("./routes/groups"))

/* Middleware to return celebrate validation errors as
   Bad Request (400) instead of Internal Server Error (500)
   it must be placed after routes
*/
app.use(errors())

app.listen(port, () => {
    console.log("Started application on port %d", port)
});