module.exports.isAuthenticated = (req, res, next) => {
  if (req.session.code === undefined || req.session.code === null) {
    req.session.redirect_url = req.originalUrl;
    res.redirect("/login");
    return;
  }
  next();
};
