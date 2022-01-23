const express = require("express");
const ResourceHandler = require("./ResourceHandler");
const app = express();

// private properties (members) that are defined for the class
const _server = new WeakMap();
const _port = new WeakMap();
const _cache = new WeakMap();

/*
    ExpressSimpleHttpServer:
        The class is a simple wrapper for the object that is returned
        afte calling express();

        _server:
            the object that is returned after calling express

         _port:
            the number either provide by the hosting environment
            or the user

        _cache:
            FOR NOW, it is pre-written html and css files for the site
            (Possibly will be improved to do the REAL caching)
*/

class ExpressSimpleHttpServer {
  constructor(port) {
    _server.set(this, express());
    _port.set(this, process.env.PORT || port);
    _cache.set(this, {});
  }

  /*
    defineRoute(path, callback, args):
        The method is a wrapper for the the get method in Express

        path: 
            a string that represents a route

        callback: 
            a user defined function that must follow the followings
            callback(req, res, args);
                req: the req that is passed from express get
                res: the res that is passed from express get
                args: the used defined args for the callback
        
        args: 
            arguments for the callback function
  */

  defineRoute(path, callback, args) {
    const server = _server.get(this);

    server.get(path, (req, res) => {
      callback(req, res, args);
    });
  }

  // start: Listening connection on the given port or the port that host provides
  start() {
    _server.get(this).listen(_port.get(this), () => {
      console.log(`Listening on port ${_port.get(this)} ...`);
      console.log(`Hosting Address: http://localhost:8000/`);
    });
  }

  // cacheDefaultData: Loading the pre-written html/css files from the folders
  cacheDefaultData() {
    _cache.get(this)["/"] =
      ResourceHandler.readFileFromPath("./html/resume.html");

    _cache.get(this)["/contact"] = ResourceHandler.readFileFromPath(
      "./html/contact.html"
    );

    _cache.get(this)["/css/stylesheet.css"] = ResourceHandler.readFileFromPath(
      "./css/stylesheet.css"
    );
    _cache.get(this)["/css/normalize.css"] = ResourceHandler.readFileFromPath(
      "./css/normalize.css"
    );
  }

  // loadDefaultRoutes: Setting up the default routes and get callbacks
  loadDefaultRoutes() {
    const homepage = (req, res, args) => {
      const data = _cache.get(this)["/"];
      res.set("Content-Type", "text/html");
      res.send(data);
    };

    const contact = (req, res, args) => {
      const data = _cache.get(this)["/contact"];
      res.set("Content-Type", "text/html");
      res.send(data);
    };

    const stylesheet = (req, res, args) => {
      const data = _cache.get(this)["/css/stylesheet.css"];
      res.set("Content-Type", "text/css");
      res.send(data);
    };

    const normalize = (req, res, args) => {
      const data = _cache.get(this)["/css/normalize.css"];
      res.set("Content-Type", "text/css");
      res.send(data);
    };

    this.defineRoute("/", homepage, {});
    this.defineRoute("/contact", contact, {});
    this.defineRoute("/css/stylesheet.css", stylesheet, {});
    this.defineRoute("/css/normalize.css", normalize, {});
  }
}

module.exports = ExpressSimpleHttpServer;
