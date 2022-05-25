const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const crypto = require("crypto");

dotenv.config();

const client_id = process.env.CLIENT_ID;
const port_number = process.env.PORT || 3000;

const queryString = (obj) => {
  let result = "";
  let c = 0;
  for (const [key, value] of Object.entries(obj)) {
    const leadingSymbol = c++ == 0 ? "?" : "&";
    let query = leadingSymbol + key + "=" + value;
    result += query;
  }
  return result;
};

// Redirect to spotify
router.get("/login", function (req, res, next) {
  const scope = "user-read-private user-read-email";
  const redirect_uri = `http://localhost:${port_number}/token`;
  const queries = queryString({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: crypto.randomBytes(12).toString("hex"),
  });

  res.redirect(`https://accounts.spotify.com/authorize${queries}`);
});

module.exports = router;
