/**
 * Created by jianghaihui on 2017/2/22.
 */


var fs = require("fs");

fs.readFile('./input.txt' , function (err , data ) {
    if(err) {
        return console.log(err);
    }
        console.log(data.toString());

});
console.log("程序执行结束");