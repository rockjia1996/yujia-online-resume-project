const ExpressSimpleHttpServer = require("./ExpressSimpleHttpServer");

const server = new ExpressSimpleHttpServer(8000);

server.cacheDefaultData();
server.loadDefaultRoutes();
server.start();
