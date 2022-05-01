const path = require("path");

module.exports = function(file) {
  return path.resolve(`${file}`);
};
