var http = require('http')

http.createServer(function(req,res) {
    res.end("Hello server")
}).listen(8080)

console.log("server running")