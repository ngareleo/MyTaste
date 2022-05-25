const express = require("express");
const router = express.Router();

router.get("/analytics", (req, res, next) => {
  res.send(req.cache.token);
});

module.exports = router;
