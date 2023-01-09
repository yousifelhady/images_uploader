const ImgurStorage = require('multer-storage-imgur');
const multer = require('multer');
const boom = require("boom")

const upload = multer({
  storage: ImgurStorage({ clientId: process.env.IMGUR_CLIENT_ID }),
  limits: {
    fileSize: parseInt(process.env.IMAGE_MAX_SIZE)
  },
  fileFilter: (req, file, cb) => {
    if (!/.*\.(gif|png|jpg|jpeg)$/.test(file.originalname)) {
      return cb(boom.badRequest("Only gif, png, jpg, jpeg are supported"), false);
    }
    const fileSize = parseInt(req.headers['content-length'])
    const maxFileSize = parseInt(process.env.IMAGE_MAX_SIZE)
    const maxFileSizeInBytes = Math.floor(maxFileSize / 1000000) // 1000000 ~ 1 byte
    if (fileSize > maxFileSize) {
      return cb(boom.badRequest(`Uploaded file(s) exceeded the allowed size limit which is ${maxFileSize} Bytes ~ ${maxFileSizeInBytes} MB`), false)
    }
    cb(null, true);
  }
})

module.exports = upload