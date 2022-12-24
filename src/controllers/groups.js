const { getAllGroups } = require("../businessLogic")

const listGroups = async (req, res) => {
    const groups = await getAllGroups()
    return res.status(200).json({
        groups
    })
}

module.exports = {
    listGroups
}