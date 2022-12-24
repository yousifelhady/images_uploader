const groupDAL = require("../dataAccessLayer/models/group/CRUD")

const createGroupImages = async (data) => {
    return groupDAL.create(data)
}

const getGroupImagesBL = async (groupId) => {
    const group = await groupDAL.findById(groupId)
    return group.images
}

const getAllGroups = async () => {
    const groups = await groupDAL.findAll()
    return groups.map(group => {
        return {
            id: group._id.toString(),
            name: group.name
        }
    })
}
    

module.exports = {
    createGroupImages,
    getGroupImagesBL,
    getAllGroups
}