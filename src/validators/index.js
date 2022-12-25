const { Joi, celebrate } = require('celebrate')
const joiObjectId = require('joi-objectid')
const objectId = joiObjectId(Joi)

const validateGroupId = {
  params: {
    group_id: objectId().required()
  }
}

module.exports = {
    validateGroupId: celebrate(validateGroupId)
}