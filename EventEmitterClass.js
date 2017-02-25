/**
 * Created by jianghaihui on 2017/2/25.
 */
var events = require('events');

var eventEmitter = new events.EventEmitter();

//监听1
var lis1 = function lis1() {
    console.log('listening lis1');
}

//监听2
var lis2 = function lis2() {
    console.log('listening lis2');
}

//绑定connection事件，处理函数为lis1
eventEmitter.addListener('con' , lis1);

//绑定con事件，处理函数为lis2
eventEmitter.addListener('con' , lis2);

var eventListers =  require('events').EventEmitter.listenerCount(eventEmitter , 'con');

console.log(eventListers + '个监听器在连接事件');

//发送con事件
eventEmitter.emit('con');

//移除绑定的lis1函数
eventEmitter.removeListener('con', lis1);
console.log('lis1不在受监听');

//再次触发事件
eventEmitter.emit('con');

eventListeners =  require('events').EventEmitter.listenerCount(eventEmitter,'con');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");