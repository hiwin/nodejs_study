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

console.log('----------------------------------');
/*
 util.inspect
 util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。
 它至少接受一个参数 object，即要转换的对象。
 showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
 depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。
 如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。
  如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
 特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用
 */
var util = require('util');
function Person() {

    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj , true));

console.log('----------------------------------');

var util = require('util');

console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp());
console.log(util.isDate(new Date()));
console.log(util.isDate());

/*
 util.isError(object)
 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

 */
console.log(util.isError(new Error()));
console.log(util.isError({name:'error',message:'an error messages'}));