/**
 * Created by jianghaihui on 2017/3/15.
 */
var fs = require("fs");
var buf = new Buffer(1024);
/*
 console.log("准备打开已存在的文件！");
 fs.open('output.txt', 'r+', function(err, fd) {
 if (err) {
 return console.error(err);
 }
 console.log("文件打开成功！");
 console.log('截取10字节后的文件内容');
 fs.ftruncate(fd , 10, function(err) {
 if(err){
 console.log(err);
 }
 });
 console.log("文件截取成功。");
 console.log("读取相同的文件");
 fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
 if (err){
 console.log(err);
 }
 console.log(bytes + "  字节被读取");

 // 仅输出读取的字节
 if(bytes > 0){
 console.log(buf.slice(0, bytes).toString());
 }
 fs.close(fd,function(err) {
 if(err){
 console.log(err);
 }
 console.log('file has been closed');
 });
 });
 });

 fs.unlink('output1.txt',function(err) {

 console.log('ready delete file');

 if(err){
 return console.error(err);
 }
 console.log('file delete sueecssfully');
 });*/



/*
fs.readdir("/Users/jianghaihui/MyVitualHost/practise/nodejs/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});
*/

console.log("准备删除目录 /tmp/test");
fs.rmdir("/Users/jianghaihui/MyVitualHost/practise/nodejs/hiwin/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("/Users/jianghaihui/MyVitualHost/practise/nodejs/");
    fs.readdir("/Users/jianghaihui/MyVitualHost/practise/nodejs/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});


