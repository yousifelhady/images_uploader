const express = require('express')
const router = express.Router()
const { listGroups } = require("../controllers/groups")

router.get('/', listGroups)

module.exports = router