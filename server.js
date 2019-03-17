var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("I can't believe you've done this.");
  response.end();
}).listen(8888);