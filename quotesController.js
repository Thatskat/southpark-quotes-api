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

function filterIt(arr, searchTerm) {
  return arr.filter(function (obj) {
    return Object.keys(obj).some(function (key) {
      return obj[key].includes(searchTerm);
    });
  });
}

function searchQuotes(arr, searchTerm) {
  let regex = new RegExp(searchTerm, "i");
  regex = regex.toString().replace(/^\/|\/[a-z]*$/gi, "");

  let lowercaseArr = arr.map(function (i) {
    let lowercaseObjects = {};
    Object.entries(i).forEach(function ([key, value]) {
      lowercaseObjects[key] = value.toLowerCase();
    });
    return lowercaseObjects;
  });

  return filterIt(lowercaseArr, regex);
}

module.exports.getRandom = getRandom;
module.exports.searchQuotes = searchQuotes;
