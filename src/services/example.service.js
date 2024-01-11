const { MOCKE_EXAMPLE } = require("../database/models/example")

const getAllExample = () => {
    return MOCKE_EXAMPLE
}

const getDetail = (id) => {
    id = parseInt(id); 
    id += 10; 
    return id;
}

module.exports = {
    getAllExample,
    getDetail
}
