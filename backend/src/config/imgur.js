const ImgurStorage = require('multer-storage-imgur');
const multer = require('multer');

const upload = multer({
  storage: ImgurStorage({ clientId: 'f0406192c853557' })
})

module.exports = upload