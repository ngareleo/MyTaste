const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600 * 24,
    secure: false,
  },
};

module.exports = { sessionConfig };
