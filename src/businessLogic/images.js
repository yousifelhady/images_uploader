const groupDAL = require("../dataAccessLayer/models/group/CRUD")

const createGroupImages = async (data) => {
    return groupDAL.create(data)
}

const getGroupImagesBL = async (groupId) => {
    const group = await groupDAL.findById(groupId)
    return group.images
}

module.exports = {
    createGroupImages,
    getGroupImagesBL
}