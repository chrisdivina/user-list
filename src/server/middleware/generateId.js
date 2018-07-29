const shortid = require('shortid');

module.exports = function generateId(req, res, next) {
  if (!req.params.id || !req.body.id) {
    req.body.id = shortid.generate();
  }

  next();
};
