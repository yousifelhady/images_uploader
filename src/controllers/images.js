const { createGroupImages, getGroupImagesBL } = require("../businessLogic/images")

const addImages = async (req, res) => {
    // console.log(req.body)
    const group = await createGroupImages(req.body)
    // console.log(group)
    return res.status(200).json({
        success: true,
        group
    })
}

const getGroupImages = async (req, res) => {
    const groupId = req.params.group_id
    const groupImages = await getGroupImagesBL(groupId)
    return res.status(200).json({
        images: groupImages
    })
}

module.exports = {
    addImages,
    getGroupImages
}