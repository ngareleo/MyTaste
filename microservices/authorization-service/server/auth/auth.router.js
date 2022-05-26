const express = require("express");
const router = express.Router();

// test the route with zombie
router.get("/is-autheticated", (req, res, next) => {
  if (req.session.authenticated) {
    res.status = 200;
  } else {
    res.status = 404;
  }
});
