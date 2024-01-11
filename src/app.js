const express = require("express")
const app = express()
const config = require('./config/config')
app.logger = require("../utils/logger")
const router = require('./routes')
const cors = require("cors")



app.use(cors())
app.use("/", router)

const PORT = config.app.PORT|| 3000

app.listen(PORT, () => {
    app.logger.log(`App running on: "http://localhost:${PORT}"`)
})