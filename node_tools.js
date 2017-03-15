/**
 * Created by jianghaihui on 2017/3/13.
 */

var tool  = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello' + this.name);
    }
}
Base.prototype.showName = function () {

    console.log(this.name);
}

function Sub() {

    this.name = 'sub';
}

//util.inherits(constructor, superConstructor)

/*
 constructor : 构造函数
 superConstructor: 父类构造函数
 所以这个函数的作用就是将子类的构造方法通过Object.create函数，继承父类的构造方法
 */
tool.inherits(Sub , Base);


var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
console.log(objSub);
objSub.showName();
// objSub.sayHello();
console.log(objSub);