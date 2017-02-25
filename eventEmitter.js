/**
 * Created by jianghaihui on 2017/2/23.
 */

/*
// 引入events模块
var events = require('events');

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();*/


//时间的单独监听
/*var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
event.on('hiwin',function () {
    console.log('hiwin 事件触发');
});
setInterval(function () {
    event.emit('hiwin');
},1000);*/

//event
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'hiwin', 'chiang');
