const SimpleHttpServer = require("./SimpleHttpServer");
const ResourceHandler = require("./ResourceHandler");

const content = ResourceHandler.readFileFromPath("./html/resume.html");
const server = new SimpleHttpServer(8000);

console.log("Launching ... ");
server.cacheData();
server.launchServer();
