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
// Done on the presentation layer
router.get("/login", function (req, res, next) {
  const authorizationScopes = [
    "user-read-recently-played",
    "user-read-email",
    "user-top-read",
    "user-library-read",
    "user-library-modify",
    "user-read-private",
  ];
  const scope = createAuthorizationScope(authorizationScopes);
  const requestRedirectURI = req.query.redirect;
  const redirect_uri =
    requestRedirectURI || `http://localhost:${port_number}/token`;
  const external_query = req.query.external || null;
  const queries = queryString({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: crypto.randomBytes(12).toString("hex"),
  });
  const spotifyLoginRedirectURI = `https://accounts.spotify.com/authorize${queries}`;
  res.redirect(spotifyLoginRedirectURI);
});

const createAuthorizationScope = (permissions) => {
  let result = "";
  for (item of permissions) result += `${item} `;
  return result;
};
module.exports = router;
