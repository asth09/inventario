const exampleService = require("../../src/services/example.service")

const getItem = (req, res) => {
    const data = exampleService.getAllExample()
    res.send({data})
}

const getDetail = (req, res) => {
    const { id } = req.params
    const data = exampleService.getDetail(id)
    res.send({data})
}

const updateItem = (req, res) => {

}

const createItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = {
    getItem,
    getDetail,
    updateItem,
    createItem,
    deleteItem
}