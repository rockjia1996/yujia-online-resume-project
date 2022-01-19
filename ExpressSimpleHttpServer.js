const express = require("express");
const app = express();


const _server = new WeakMap();
const _port = new WeakMap();
const _cache = new WeakMap();

class ExpressSimpleHttpServer{

    /*
        _server is the object that is returned after calling express
        _port is the number either provide by the hosting environment
        or the user
    */
    constructor(port){
        _server.set(this, express());
        _port.set(this, process.env.PORT || port);
        _cache.set(this, {});
    }

    loadRoutes() {
        const server = _server.get(this);

        server.get("/", (req,res) => {
            console.log("root req!")
            res.send("Hello!");
        });


    }

    start(){
        this.loadRoutes();
        _server.get(this).listen(_port.get(this), () => {
            console.log(`Listening on port ${_port.get(this)} ...`);
            console.log(`http://localhost:8000/`);
        })
    }



}

module.exports = ExpressSimpleHttpServer;