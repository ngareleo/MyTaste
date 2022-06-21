const monogoose = require("mongoose");
const uri = process.env.DATABASE_URI;

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600 * 1000 * 24,
  },
};

const createConnection = async () => {
  const monogooseOptions = {
    useNewURLParser: true,
    useUnifiedTopology: true,
  };
  monogoose.connect(uri, monogooseOptions).catch((err) => {
    throw new Error("Database Connection Error");
  });
  console.log("Database connection successful");
};

module.exports = { sessionConfig, createConnection };
