/**
 * Created by jianghaihui on 2017/2/26.
 */

function hi(name) {
    console.log('hello ' + name);
}

function say(fun , name) {
    fun(name);
}

say(hi , 'hiwin');

say(function(word) { console.log(word) }, 'xixi');