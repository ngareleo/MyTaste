var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

const client_id = process.env.CLIENT_ID;

// Use crypto module to make safer
const generateRandomString = (n) => {
  // get random number between 1 and 25 then get the ascii char
  var result = "";
  for (var i = 0; i < n; i++) {
    let randomNumber = 65 + parseInt(Math.random() * 25);
    result += String.fromCharCode(randomNumber);
  }
  return result;
};

const queryString = (obj) => {
  let result = "";
  for (const [key, value] of Object.entries(obj)) {
    result += "&" + key + "=" + value;
  }
  return result.substring(1); // remove the leading & character
};

// Redirect to spotify
router.get("/login", function (req, res, next) {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";
  const redirect_uri = "http://localhost:4444/";

  const queries = queryString({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,
  });
  res.redirect("https://accounts.spotify.com/authorize?" + queries);
});

module.exports = router;
