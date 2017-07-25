/**
 * Created by jianghaihui on 2017/3/18.
 */


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/' , function (req , res) {

    console.log("Cookies:" , req.cookies);
    res.send("Cookies:" + req.cookies);
});

app.listen(8081);