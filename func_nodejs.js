/**
 * Created by jianghaihui on 2017/3/11.
 */

function execute(someFunction, value) {
    someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");


var http = require('http');

function hiwin(request , response){
    response.writeHead(200 , {'Content-Type':'text/plain'});
    response.write('hiwin\'s world');
    response.end();
}

http.createServer(hiwin).listen(8888);