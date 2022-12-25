const express = require('express')
const router = express.Router()
const upload = require('../config/imgur')
const { addImages, groupImages } = require("../controllers/images")

router.post('/', upload.any(), addImages)
router.get('/groups/:group_id', groupImages)

module.exports = router