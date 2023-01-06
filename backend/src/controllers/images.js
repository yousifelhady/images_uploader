const { wrapAsyncAction } = require("../config/utils")
const { createGroupImages, getGroupImages } = require("../businessLogic")

const addImages = async (req, res) => {
    /*
    try {
        const groupName = req.query.group_name
        const files = req.files
        const group = await createGroupImages(groupName, files)
        return res.status(200).json({
            success: true,
            group
        })
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
    */
    const groupName = req.query.group_name
    const files = req.files
    const group = await createGroupImages(groupName, files)
    return res.status(201).json({
        group
    })
}

const groupImages = async (req, res) => {
    /*
    try {
        const groupId = req.params.group_id
        const groupImages = await getGroupImages(groupId)
        return res.status(200).json({
            images: groupImages
        })
    } catch (error) {
        return res.status(error.output.payload.statusCode).json({
            error: error.message
        })
    }
    */
    const groupId = req.params.group_id
    const groupImages = await getGroupImages(groupId)
    return {
        images: groupImages
    }
}

module.exports = {
    addImages: wrapAsyncAction(addImages),
    groupImages: wrapAsyncAction(groupImages)
}