const health = async (req, res) => {
    return res.status(200).json({
        status: "healthy"
    })
}

module.exports = {
    health
}