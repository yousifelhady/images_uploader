const { wrapAsyncAction } = require("../config/utils")
const { getAllGroups } = require("../businessLogic")

const listGroups = async (req, res) => {
    const groups = await getAllGroups()
    return {
        groups
    }
}

module.exports = {
    listGroups: wrapAsyncAction(listGroups)
}