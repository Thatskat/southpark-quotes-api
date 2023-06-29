"use strict";
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "SouthPark-Quotes" },
  transports: [
    new winston.transports.File({
      filename: "/logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "/logs/warnings.log",
      level: "warn",
    }),
    new winston.transports.File({ filename: "/logs/combined.log" }),
  ],
});

// EXPRESS ERRORS LOG
function error(err, req, res, next) {
  logger.error(err.message, err);
  res.status(500).send("Oh no! An error has occurred.");
  return;
}

// UNCAUGHT SYNC EXCEPTION
process.prependListener("uncaughtException", (ex) => {
  console.log(ex);
  logger.error(ex.message, ex);
  process.exit(1);
});
