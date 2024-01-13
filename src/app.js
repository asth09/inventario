const express = require("express")
const app = express()
const config = require('./config/config')
app.logger = require("../utils/logger")
const { router } = require('./routes')
const cors = require("cors")
const path = require("path")
const db = require("./database")

app.use(express.json())

// Temp views
console.log(path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, 'views'))

app.use(cors())
app.use("/", router)

const PORT = config.app.PORT|| 3000

app.listen(PORT, () => {
    db()
    app.logger.log(`App running on: "http://localhost:${PORT}"`)
})