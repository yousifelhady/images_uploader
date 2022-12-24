const express = require("express")
const port = 8080
var app = express()

app.use("/", require("./routes/health"))

app.listen(port, () => {
    console.log("Started application on port %d", port)
});