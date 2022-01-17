const http = require("http");
const ResourceHandler = require("./ResourceHandler");

const _server = new WeakMap();
const _port = new WeakMap();
const _cache = new WeakMap();

class SimpleHttpServer {
  constructor(port) {
    _server.set(this, this.createSimpleHttpServer());
    _port.set(this, port);
    _cache.set(this, {});
  }

  createSimpleHttpServer() {
    const server = http.createServer((req, res) => {
      console.log(req.url);
      if (req.url === "/") {
        res.write(_cache.get(this)["/"]);
        res.end();
      }
      if (req.url === "/css/stylesheet.css") {
        res.write(_cache.get(this)["/css/stylesheet.css"]);
        res.end();
      }
    });
    return server;
  }

  launchServer() {
    const server = _server.get(this);
    const port = _port.get(this);
    server.listen(port);
  }

  cacheData() {
    _cache.get(this)["/"] =
      ResourceHandler.readFileFromPath("./html/resume.html");
    _cache.get(this)["/css/stylesheet.css"] = ResourceHandler.readFileFromPath(
      "./css/stylesheet.css"
    );
  }
}

module.exports = SimpleHttpServer;
