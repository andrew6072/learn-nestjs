var http = require('http');
var mymodule = require('./myfirstmodule')
var url = require('url');
// import the built-in http module in Node.js, which provides utilities to create an HTTP server

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + mymodule.myDateTime() + "\n");
    res.write(req.url + "\n");
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month + "\n";
    res.end(txt);

    // res.write("4 + 5 = " + mymodule.add(4, 5) + "\n");
    // res.write("4 - 5 = " + mymodule.subtract(4, 5) + "\n");
    // res.write("4 * 5 = " + mymodule.multiply(4, 5) + "\n");
    // res.write("4 / 5 = " + mymodule.divide(4, 5) + "\n");
    // res.end('First node js server!');
}).listen(8080);

/**
 * 1) The createServer() method is used to create an HTTP server.
 * It takes a callback function as an argument, which is 
 * executed every time a request is made to the server.
 * 
 * req: The request object, which contains information about 
 * the incoming request (e.g., URL, headers, etc.).
 * 
 * res: The response object, which is used to send a response back to the client.
 * 
 * 2) res.writeHead(200, {'Content-Type': 'text/plain'}); is used to send an HTTP 
 * status code and a set of response headers back to the client.
 * 
 * 200 is the status code, which means "OK" (the request was successful).
 * 
 * {'Content-Type': 'text/plain'} sets the Content-Type header, indicating 
 * that the response body will be plain text.
 * 
 * 3) res.end() is used to end the response process. It sends the specified 
 * data ('First node js server!' in this case) as the response body and closes 
 * the connection.
 * 
 * 4) The listen() method is called on the server object returned by createServer().
 * It tells the server to listen on a specific port (in this case, port 8080) for 
 * incoming requests.
 * 
 * The server will be accessible via http://localhost:8080 in a web browser or 
 * via any HTTP client.
 * 
 * The createServer method in the code does not differentiate between URLs. 
 * It executes the same callback function for every incoming HTTP request, 
 * regardless of the request path (e.g., /, /abc/xyz/123, /test, etc.).
 * 
 * Example code of adding Route Handling:
 * var http = require('http');

    http.createServer(function (req, res) {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home Page');
        } else if (req.url === '/abc/xyz/123') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('You requested /abc/xyz/123');
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found');
        }
    }).listen(8080);
 * 
 * 
 * 
 * 
 */