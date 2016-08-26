var co = require('co');

co(function* () {
    var result = yield Promise.resolve(true);
    console.log(result);
    var result = yield Promise.resolve(false);
    console.log(result);
})