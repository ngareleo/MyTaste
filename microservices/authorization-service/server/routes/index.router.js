const express = require("express");
const router = express.Router();

/* 
  Check if the user is authenticated using cookies
  Inside the cookie we store the code

  If a request lacks the code we redirect to login
  If the request has a code we redirect to token to get the token
*/
router.get("/", function (req, res, next) {
  res.redirect("/login");
});

module.exports = router;
