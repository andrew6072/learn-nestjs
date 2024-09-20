const events = require("events");
const http = require('http');

const eventEmitter = new events.EventEmitter();

var myEventHandler = function(req, res) {
    console.log(`Received request for ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Request processed\n');
}

eventEmitter.on('requestReceived', myEventHandler);

const server = http.createServer(
    (req, res) => {
        eventEmitter.emit('requestReceived', req, res);
    }
);

server.listen(8080, ()=>{
    console.log('Server is listening on port 8080');
});


