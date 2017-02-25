/**
 * Created by jianghaihui on 2017/2/25.
 */
var events = require('events');

var eventEmitter = new event.EventEmitter();

//监听1
var lis1 = function lis1() {
    console.log('listening lis1');
}

//监听2
var lis2 = function lis2() {
    console.log('listening lis2');
}

//绑定connection事件，处理函数为lis1
