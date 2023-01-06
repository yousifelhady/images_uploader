const _ = require("lodash")
const boom = require("../config/boom")
const groupDAL = require("../dataAccessLayer/models/group/CRUD")

const createGroupImages = async (groupName, files) => {
    boom.badRequest(_.isNil(files), 'files URLs cannot be empty')
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
    const groupNotFound = _.isNil(group)
    boom.notFound(groupNotFound, `group with id: ${groupId} cannot be found in db`)
    return group.images
}

const getAllGroups = async () => {
    const groups = await groupDAL.findAll()
    return groups.map(group => {
        return {
            _id: group._id.toString(),
            name: group.name
        }
    })
}
    

module.exports = {
    createGroupImages,
    getGroupImages,
    getAllGroups
}