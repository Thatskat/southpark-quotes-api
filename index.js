"use strict";

// IMPORT EXPRESS MODULE
const express = require("express");
const app = express();

// IMPORT MODULES
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

// SET RATE LIMIT
const limit = rateLimit({
  windowMs: 3 * 60,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

// GET RANDOM FUNCTION FROM ./QUOTESCONTROLLER
const { getRandom } = require("./quotesController");

// IMPLEMENT MIDDLEWARE
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limit);

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/v1/quotes/:num?", function (req, res, next) {
  res.send(getRandom(req.params.num || 1));
});

// ERROR MIDDLEWARE


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
