module.exports.isAuthenticated = (req, res, next) => {
  if (req.cache.token === null) {
    req.session.authenticated = false;
  } else {
    req.session.authenticated = true;
  }
  next();
};
