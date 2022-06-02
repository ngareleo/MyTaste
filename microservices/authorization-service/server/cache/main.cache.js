const Token = require("../models/token.model");

// test every method
// Make sure the state of the db is the same pre and post tests
// if the caching module fails the application should continue
class Cache {
  config = async (req, res, next) => {
    // take the code then check it aganist the token
    const authCode = req.session.code || null;
    const token = (await this.get(authCode)) || null;
    console.log("Token ", token);
    req.cache = { token: token };
    next();
  };

  insert = (code, token) => {
    const newTokenInstance = new Token({
      code: code,
      token: token,
    });
    newTokenInstance.save().catch((err) => {
      console.log(err);
      throw Error("Datbase error");
    });
  };

  remove = (codeStr) => {
    Token.deleteOne({ code: codeStr });
  };

  get = (codeStr) => {
    // check if it exists
    return new Promise((resolve, reject) => {
      Token.findOne({ code: codeStr }, (err, token) => {
        if (err) {
          err.type = "Database";
          reject(err);
        } else {
          if (token) resolve(token.token);
          resolve(null);
        }
      });
    });
  };
}

module.exports = { Cache };
