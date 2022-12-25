const { createGroupImages, getGroupImages } = require("../businessLogic")

const addImages = async (req, res) => {
    const groupName = req.query.group_name
    const files = req.files
    // console.log(groupName)
    // console.log(files)
    const group = await createGroupImages(groupName, files)
    return res.status(200).json({
        success: true,
        group
    })
}

const groupImages = async (req, res) => {
    const groupId = req.params.group_id
    const groupImages = await getGroupImages(groupId)
    return res.status(200).json({
        images: groupImages
    })
}

module.exports = {
    addImages,
    groupImages
}