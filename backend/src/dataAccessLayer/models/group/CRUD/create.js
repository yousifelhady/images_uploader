const Group = require('../Group')

const create = async (data) => {
    let groupData = {
        name: data.group_name,
        images: data.images
    }
    const group = new Group(groupData)
    return group.save()
}

module.exports = {
    create
}