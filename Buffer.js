/**
 * Created by jianghaihui on 2017/2/25.
 */

//创建长度为10字符串的Buffer
// var buf = new Buffer(10);
//通过数组创建
// var buf = new Buffer(10 ,20 ,30 ,40 ,50);
//通过字符串来创建，utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
// var buf = new Buffer('www.hiwin.cc' , 'utf-8');


//
// buf = new Buffer(100);
// len = buf.write('www.hiwin.cc');
//
// console.log('写入的字节'+len);\


buf = new Buffer(26);
for(var i = 0; i <26; i++){

    buf[i] = i +97;
}

var buf2 = new Buffer('     www.hiwin.cc');
var buf3 = Buffer.concat([buf, buf2]);
console.log(buf.toJSON(buf));
console.log(buf.toString('ascii', 0, 6));
console.log(buf.toString('utf8', 0, 7));
console.log(buf.toString(undefined , 0 ,8));
console.log('buf3:' + buf3.toString());
console.log('buf3 \'s length :' + buf3.length);

//缓冲区剪切
var buf4 = buf2.slice(0,8);
console.log('buf4 content : '+buf4.toString());

//compare缓冲区比较
//比较的是字节长度
var buffer1 = new Buffer('123');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
//缓冲区拷贝
var buff1 = new Buffer('ABC');
var buff2 = new Buffer(4);

buff1.copy(buff2);
console.log('buff2 content :' + buff2.toString());

