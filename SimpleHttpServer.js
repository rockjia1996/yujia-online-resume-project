const http = require("http");
const ResourceHandler = require("./ResourceHandler");

const _server = new WeakMap();
const _port = new WeakMap();
const _cache = new WeakMap();

/*
  SimpleHttpServer only mean to be used as a simple static 
  html server. 

*/
class SimpleHttpServer {
  constructor(port) {
    _server.set(this, this.createSimpleHttpServer());
    _port.set(this, port);
    _cache.set(this, {});
  }

  /* 
  
    createSimpleHttpServer creates a server instance from the http
    moudle.

    In the future, the whole method may be rewritten in Express.

  */
  createSimpleHttpServer() {
    const server = http.createServer((req, res) => {
      console.log(req.url);

      // root, the resume html itself
      if (req.url === "/") {
        res.write(_cache.get(this)["/"]);
        res.end();
      }

      // stylesheet for the resume
      if (req.url === "/css/stylesheet.css") {
        res.write(_cache.get(this)["/css/stylesheet.css"]);
        res.end();
      }

      // normalize.css for standardizing styling
      if (req.url === "/css/normalize.css") {
        res.write(_cache.get(this)["/css/normalize.css"]);
        res.end();
      }
    });
    return server;
  }

  /*
    launchServer method will definitely be rewritten in the future.
    Since the server run is planned to host on Amazon lightsail. 
    In the future, the method problem will involve a lot of invoking 
    of configuration methods.

  */
  launchServer() {
    const server = _server.get(this);
    const port = _port.get(this);
    server.listen(port);
  }

  /*
    cacheData:
      A simple "caching" for the server, all it does
      is reading the files from the given path and save
      in the the memory.
  */

  cacheData() {
    _cache.get(this)["/"] =
      ResourceHandler.readFileFromPath("./html/resume.html");
    _cache.get(this)["/css/stylesheet.css"] = ResourceHandler.readFileFromPath(
      "./css/stylesheet.css"
    );
    _cache.get(this)["/css/normalize.css"] = ResourceHander.readFileFromPath(
      "./css/normalize.css"
    );
  }
}

module.exports = SimpleHttpServer;
