const shortid = require('shortid');

module.exports = function generateId(req, res, next) {
  req.body.id = req.params.id || req.body.id || shortid.generate();
  next();
};
