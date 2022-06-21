const express = require("express");
const router = express.Router();
const axios = require("axios");
const { Cache } = require("../cache/main.cache");

// globals
const client_id = process.env.CLIENT_ID || null;
const client_secret = process.env.CLIENT_SECRET || null;
const port_number = process.env.PORT || 3000;
const redirect_uri = `http://localhost:${port_number}/token`;
const cache = new Cache();
const cacheToken = (code, token) => {
  cache.insert(code, token);
};
const queryOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

router.get("/token", async function (req, res, next) {
  // a logged in redirect and unauthorized
  const code = req.query.code || null;
  const codeIsValid = code != null;
  const grantTypeQuery = req.query.grant_type || null;
  const grantTypeIsNull = grantTypeQuery === null;
  const grantType = grantTypeIsNull ? "client_credentials" : "refresh_token"; // represent with enum
  if (!codeIsValid) {
    return res.redirect("/login");
  } else {
    try {
      const formData = await initFormData(grantType, code);
      const response = await axios.post(
        queryOptions.url,
        new URLSearchParams(formData),
        {
          headers: queryOptions.headers,
        }
      );
      if (response.status === 200) {
        const { access_token } = response.data;
        req.session.code = code;
        cacheToken(code, access_token);
        res.redirect("/");
      } else {
        res.status = 401;
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
});

const getClientCredentialsOptions = (grantType, code) => {
  return {
    grant_type: grantType,
    code: code,
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
  };
};

const initFormData = async (grantType, code) => {
  const searchResult = await cache.get(code);
  return new Promise((resolve, reject) => {
    if (grantType === "refresh_token") {
      resolve({
        grant_type: "refresh_token",
        refresh_token: searchResult.refresh_token,
      });
    } else if (grantType === "client_credentials") {
      resolve(getClientCredentialsOptions(grantType, code));
    }
  });
};

module.exports = router;
