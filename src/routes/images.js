const express = require('express')
const router = express.Router()
const upload = require('../config/imgur')
const { addImages, getGroupImages } = require("../controllers/images")

router.post('/', upload.any(), addImages)
router.get('/groups/:group_id', getGroupImages)

module.exports = router