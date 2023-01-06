const Boom = require('boom')

const _validate = funcName => (boolValue, ...boomArgs) => {
  if (boolValue) {
    throw Boom[funcName](...boomArgs)
  }
}

module.exports = {
  badData: _validate('badData'),
  badImplementation: _validate('badImplementation'),
  badRequest: _validate('badRequest'),
  forbidden: _validate('forbidden'),
  internal: _validate('internal'),
  notAcceptable: _validate('notAcceptable'),
  notFound: _validate('notFound'),
  tooManyRequests: _validate('tooManyRequests'),
  unauthorized: _validate('unauthorized'),
  conflict: _validate('conflict')
}