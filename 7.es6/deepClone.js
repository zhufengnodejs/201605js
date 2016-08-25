Object.prototype.assign = function (target, ...source) {
    source.forEach(function (obj) {
        for (var attr in obj) {
            var value = ((Object.prototype.toString.call(obj[attr]) == '[object Object]') || (Object.prototype.toString.call(obj[attr]) == '[object Array]'))?JSON.parse(JSON.stringify(obj[attr])):obj[attr];
            target[attr] = value;
        }
    });
    return target;
};
var result = {};
Object.assign(result, {name: 'chenchao'}, {age: 18}, {
    like: {
        drink: 'drink',
        eat: 'eat',
        info: [1, 2, 3, 4, 5]
    }
});
console.log(result);

var obj = {drink: 'drink', eat: 'eat', info: [1, 2, 3, 4, 5]};
console.log(JSON.parse(JSON.stringify(obj)) == obj);