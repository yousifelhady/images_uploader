const Group = require('../Group')

const findById = (id) => Group.findById(id)

const findAll = () => Group.find()

module.exports = {
    findById,
    findAll
}