module.exports = function simulateFetchTime(req, res, next) {
  setTimeout(() => next(), 2000);
};
