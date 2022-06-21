const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

require("dotenv").config();

const auth = require("./server/auth/main.auth");
const { Cache } = require("./server/cache/main.cache");
const { sessionConfig, createConnection } = require("./config");
const { ErrorHandler } = require("./server/error/main.error");

// Routers
const indexRouter = require("./server/routes/index.router");
const loginRouter = require("./server/routes/login.router");
const tokenRouter = require("./server/routes/token.router");
const spotifyInteractionRouter = require("./server/routes/spotify.router");

createConnection();
const errorHandler = new ErrorHandler();
const app = express();
const cache = new Cache();

//custom middleware

const routeChecker = require("./server/middleware/route.middleware");
// view engine setup
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/server/public")));
app.use(session(sessionConfig));

// @authentication not required
app.use(tokenRouter);
app.use(loginRouter);

app.use(auth.isAuthenticated);
app.use("*", cache.config);
app.use(routeChecker.revisitRedirectedRoute);

// @authentication required
app.use(indexRouter);
app.use(spotifyInteractionRouter);

//error handling
app.use(errorHandler.catch404);
app.use(errorHandler.handleError);

module.exports = app;
