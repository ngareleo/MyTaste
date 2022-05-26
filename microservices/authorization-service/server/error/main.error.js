const createError = require("http-errors");

// TODO: Finish error handling
class ErrorHandler {
  catch404 = (req, res, next) => {
    next(createError(404));
  };

  handleError = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  };
}

module.exports = { ErrorHandler };
