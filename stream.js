/**
 * Created by jianghaihui on 2017/2/26.
 */

/*
//读取流

var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('./input.txt');

//设置编码
readStream.setEncoding('UTF8');

//处理事件流  data，end，error
readStream.on('data' , function(chunk) {
    data += chunk;
});

readStream.on('end' , function() {
    console.log(data);
});

readStream.on('error',function(err) {
    console.log(err.stack);
});

console.log('read programing end');

//写入流

var fs = require('fs');
var data = '海徽的博客 www.hiwin.cc';
var writeStream = fs.createWriteStream('./output.txt');

//设置编码
writeStream.write(data , 'UTF8');
//标记文件末尾
 writeStream.end();

//处理事件流  finish，error
readStream.on('finish' , function() {
    console.log('have been written');
});


readStream.on('error',function(err) {
    console.log(err.stack);
});

console.log('write programing end');*/





/*
//管道流
var fs = require('fs');

var readerStream = fs.createReadStream('output.txt');
var writeStream = fs.createWriteStream('output1.txt');

//管道读写操作，读取output写到output1中
readerStream.pipe(writeStream);
console.log('the end');*/



//链式流
/*
 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
 接下来我们就是用管道和链式来压缩和解压文件。
 */

/*var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('./input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('file compression completed');*/

/*
 执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。
 接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：
 */

var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input1.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input1.txt'));
console.log('file copression completed');

/*
 require方法接受以下几种参数的传递：
 http、fs、path等，原生模块。
 ./mod或../mod，相对路径的文件模块。
 /pathtomodule/mod，绝对路径的文件模块。
 mod，非原生模块的文件模块。
 */






