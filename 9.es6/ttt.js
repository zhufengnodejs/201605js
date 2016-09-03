var co = require('co');
console.log(co);
co(function* () {
    console.log(1);
    var a  = yield new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('a')
        },1000)
    });
    console.log(a);
    var b  = yield new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a +'-b')
        },1000)
    });
    console.log(b);
});