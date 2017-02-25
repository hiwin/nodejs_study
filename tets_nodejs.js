/**
 * Created by jianghaihui on 2017/2/22.
 */

var http = require("http");

http.createServer(function (request , response) {

    response.writeHead(200 , {'Content-Type' : 'text/plain'});
    response.end("Hellow Hiwin");
}).listen(8888);

console.log('Server runnning at http://127.0.0.1:8888/');