const groupDAL = require("../dataAccessLayer/models/group/CRUD")

const createGroupImages = async (groupName, files) => {
    const data = {
        group_name: groupName,
        images: files.map(file => ({
                image_url: file.link
            }))
    }
    return groupDAL.create(data)
}

const getGroupImages = async (groupId) => {
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
    getGroupImages,
    getAllGroups
}