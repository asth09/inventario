const express = require("express")
const router = express.Router()
const exampleController = require("../../controllers/example.controller")


router.get("/", exampleController.getItem)
router.get("/:id", exampleController.getDetail)



module.exports = router