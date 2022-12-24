const Group = require('../Group')

const findById = (id) => Group.findById(id)

module.exports = {
    findById
}