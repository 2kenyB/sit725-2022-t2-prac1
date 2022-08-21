// include http module in the file
var http = require('http');
 
// create a server
var server=http.createServer(function (req, res) {
    // http header
    // 200 - is the OK message
    // to respond with html content
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('<h1>sit 725'); //write a response to the client
    res.end(); //end the response
})
server.listen(3000); //the server object listens on port 3000