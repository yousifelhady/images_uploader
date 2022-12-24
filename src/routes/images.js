const express = require('express')
const router = express.Router()
const { addImages, getGroupImages } = require("../controllers/images")

router.post('/', addImages)
router.get('/groups/:group_id', getGroupImages)

module.exports = router