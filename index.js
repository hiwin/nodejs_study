/**
 * Created by jianghaihui on 2017/2/26.
 */
var server = require('./server');

var router = require('./route');

server.start(router.route);