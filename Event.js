/**
 * Created by jianghaihui on 2017/2/23.
 */


//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

/*
//绑定事件及时间的处理程序
eventEmitter.on('hiwin' , eventHandler);
//触发事件
eventEmitter.emit('hiwin');*/

var connectHandler = function () {
    console.log('success connect');

    //触发data_received事件
    eventEmitter.emit('data_received');
};

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_recrived事件
eventEmitter.on('data_received',function () {
    console.log('数据接受成功');
});

//触发
eventEmitter.emit('connection');

console.log('程序执行完毕');