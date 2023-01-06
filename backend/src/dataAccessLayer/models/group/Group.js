const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    images: {
        type: [
            {
                image_url: {
                    type: String,
                    required: true
                }
            }
        ],
        default: []
    }
  }, { timestamps: true })
  
const Group = mongoose.model('Group', groupSchema)
  
module.exports = Group