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