module.exports.revisitRedirectedRoute = (req, res, next) => {
  const toVisit = req.session.redirect_url || null;
  if (toVisit === null) {
    next();
    return;
  }
  delete req.session.redirect_url;
  res.redirect(toVisit);
};
