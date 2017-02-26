/*exports.world = function () {
    console.log('haha');
};*/

function hi() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('hi '+name);
    }
}
module.exports = hi;