const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const { Cache } = require("../cache/main.cache");

// globals
const client_id = process.env.CLIENT_ID || null;
const client_secret = process.env.CLIENT_SECRET || null;
const port_number = process.env.PORT || 3000;

router.get("/token", async function (req, res, next) {
  // a logged in redirect and unauthorized
  const code = req.query.code || null;
  const redirect_uri = `http://localhost:${port_number}/token`;

  if (code === null) {
    return res.redirect("/login");
  } else {
    const options = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const response = await axios.post(
      options.url,
      querystring.stringify({
        /* remove the depreciation problem*/
        grant_type: "client_credentials",
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret,
      }),
      { headers: options.headers }
    );

    if (response.status === 200) {
      const cache = new Cache();
      req.session.code = code; // store the auth_code
      cache.insert(code, response.data.access_token); // cache the token
      res.redirect("/analytics");
    } else {
      res.send(response);
    }
  }
});

module.exports = router;
