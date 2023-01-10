const { wrapAsyncAction } = require("../config/utils")
const { createGroupImages, getGroupImages } = require("../businessLogic")

const addImages = async (req, res) => {
  const groupName = req.query.group_name
  const files = req.files
  const group = await createGroupImages(groupName, files)
  return res.status(201).json({
    group
  })
}

const groupImages = async (req, res) => {
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