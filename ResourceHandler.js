const fs = require("fs");

let buffer = "hello";
class ResourceHandler {
  static readFileFromPath(path) {
    return fs.readFileSync(path, { encoding: "utf8", flag: "r" });
  }
}

module.exports = ResourceHandler;
