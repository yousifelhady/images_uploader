const wrapAsyncAction = (action) => {
    return async (req, res, next) => {
        try {
            let ret = await action(req, res)
            if (res.headersSent) return
            if (ret == null) return res.status(204).end()
            return res.status(res.statusCode || 200).json(ret)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = {
    wrapAsyncAction
}