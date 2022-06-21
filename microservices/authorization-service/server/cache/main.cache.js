const Token = require("../models/token.model");

class Cache {
  config = async (req, res, next) => {
    const authCode = req.session.code || null;
    const accessToken = (await this.get(authCode)) || null;
    if (accessToken != null) {
      req.cache = { token: accessToken };
      next();
    }
  };

  insert = async (code, token) => {
    const codeExists = (await this.get(code)) != null;
    if (codeExists) return;
    const newTokenInstance = new Token({
      code: code,
      token: token,
    });
    newTokenInstance.save().catch((err) => {
      console.log(err);
      throw Error("Database error");
    });
  };

  remove = (codeStr) => {
    Token.deleteOne({ code: codeStr });
  };

  get = (codeStr) => {
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
