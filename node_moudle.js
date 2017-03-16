/**
 * Created by jianghaihui on 2017/3/16.
 */
/*
 5大原生的模块文件
 1	OS 模块
 提供基本的系统操作函数。
 2	Path 模块
 提供了处理和转换文件路的工具。
 3	Net 模块
 用于底层的网络通信。提供了服务端和客户端的的操作。
 4	DNS 模块
 用于解析域名。
 5	Domain 模块
 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。
 */
var os = require('os');

console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.totalmem()+'bytes');

console.log(os.freemem()+'bytes');

var path  = require('path');
console.log(path.isAbsolute('c:/hiwin/asd'));

var dns = require('dns');
console.log(dns.resolve('hiwin.com','A',function() {

}));

// var dns = require('dns');

dns.lookup('www.hiwin.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});




