const ImgurStorage = require('multer-storage-imgur');
const multer = require('multer');

const upload = multer({
  storage: ImgurStorage({ clientId: 'enter_your_key_here' })
})

module.exports = upload