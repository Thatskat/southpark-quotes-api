"use strict";

let quotes = require("./quotes.js");

function getRandom(quoteNumber) {
  let quoteLimit = quoteNumber > quotes.length ? quotes.length : quoteNumber;

  let response = new Array(quoteLimit);

  let availableResponse = quotes.slice();

  for (let i = 0; i < quoteLimit; i++) {
    response[i] = availableResponse.splice(
      Math.floor(Math.random() * availableResponse.length),
      1
    )[0];
  }
  return response;
}

module.exports.getRandom = getRandom;
