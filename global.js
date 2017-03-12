/**
 * Created by jianghaihui on 2017/3/12.
 */
/*var count = 10;
console.log("total: %d",count);
console.log("获取数据");
console.trace();

process.on('uncaughtException' ,function(code){

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});

console.log("程序执行结束");
*/
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, json) {
    console.log(index + ': ' + val +':'+json);
});

console.log(process.execPath);

console.log(process.platform);

console.log('当前版本：' + process.version);

console.log('当前目录：' + process.cwd());

//内存适用情况
console.log(process.memoryUsage());

//node已经运行的秒数
console.log(process.uptime());
