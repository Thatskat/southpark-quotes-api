"use strict";

// IMPORT EXPRESS MODULE
const express = require("express");
const app = express();
const fs = require("fs");

// IMPORT MODULES
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

// ERROR MIDDLEWARE IMPORT
const error = require('./middleware/error');

// SET RATE LIMIT
const limit = rateLimit({
  windowMs: 3 * 60,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

// GET RANDOM FUNCTION FROM ./QUOTESCONTROLLER
const { getRandom, searchQuotes } = require("./quotesController");

// IMPORT QUOTES ARRAY
const quotes = require('./quotes');

// IMPLEMENT MIDDLEWARE
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limit);

// fs.mkdirSync(logs, { recursive: true });

// USE PUBLIC FOLDER
app.use(express.static(__dirname + "/public"));

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/v1/quotes/:num?", function (req, res, next) {
  res.send(getRandom(req.params.num || 1));
});

app.get("/v1/quotes/search/:term", function (req, res,) {
  res.send(searchQuotes(quotes, req.params.term));
})

// USE ERROR MIDDLEWARE
// app.use(error)

// STORE CONFIG IN ENV VAR
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("config");

// ESTABLISH API PORT
const port = process.env.PORT || config.get("port");
app.listen(port, () => {
  console.log(
    `The South Park Quotes API is successfully running on Port ${port}`
  );
});
