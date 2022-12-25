const ImgurStorage = require('multer-storage-imgur');
const multer = require('multer');

const upload = multer({
  storage: ImgurStorage({ clientId: '2439918798efb0b' })
})

module.exports = upload