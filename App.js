const http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {  
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000');  
