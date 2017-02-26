/**
 * Created by jianghaihui on 2017/2/26.
 */
/*
 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
 换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
 */
/*var hi = require('./hi');
console.log(hi);
hi.world();*/

/*
 以上实例中，代码 require('./hello')
 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。
 Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，
 即所获取模块的 exports 对象。
 */


var hi = require('./hi');
hi = new hi();
hi.setName('hiwin');
hi.sayHello();


