/**
 * Created by jianghaihui on 2017/2/22.
 */


var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束");