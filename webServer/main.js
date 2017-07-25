/**
 * Created by jianghaihui on 2017/3/18.
 */
/*
var http = require('http');

//用于请求的选项
var options = {
    host : 'localhost',
    port : '8081',
    path:'/index.html'
};

//处理相应的回调函数
var callback = function(res) {
    //不断跟新内容
    var body = '';
    res.on('data' , function(data) {
        body += data;
    });
    res.on('end' , function() {
        //数据接收完成
        console.log(body);
    });
};

//向服务器发送请求
var req = http.request(options , callback);
req.end();
*/

var http = require('http');

// 用于请求的选项
var options = {
    host: 'localhost',
    port: '8081',
    path: '/hiwin.html'
};

// 处理响应的回调函数
var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();



