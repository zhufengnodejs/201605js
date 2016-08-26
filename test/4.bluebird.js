var Promise = require('./bluebird');

var readFile = Promise.promisify(require("fs").readFile);
readFile("1.txt", "utf8").then(function(contents) {
    console.log(contents);
})

var fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("1.txt", "utf8").then(function (contents) {
    console.log(contents);
})
