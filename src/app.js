const express = require("express")
require("./config/connectMongoose")
const port = 8080
var app = express()
app.use(express.json())

app.use("/", require("./routes/health"))
app.use("/images", require("./routes/images"))
app.use("/groups", require("./routes/groups"))

app.listen(port, () => {
    console.log("Started application on port %d", port)
});