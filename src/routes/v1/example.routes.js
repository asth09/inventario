const express = require("express")
const router = express.Router()
const exampleController = require("../../controllers/example.controller")
const login = require("../views/login")


router.get("/", exampleController.getItem)
router.get("/:id", exampleController.getDetail)
router.get("/", login.getItem)
/*router.get('/login'), (req, res) =>{
    res.render('views/login');
}*/


module.exports = router