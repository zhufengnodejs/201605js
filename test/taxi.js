var asyncCall = process.nextTick;
function resolve(promise, x) {
    if (promise === x) {
        return promise.reject(new TypeError('The promise and its value refer to the same object'));
    }
    if (x && (typeof x === 'function' || typeof x === 'object')) {
        var called = false,
            then;

        try {
            then = x.then;

            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (!called) {
                        called = true;
                        resolve(promise, y);
                    }
                }, function (r) {
                    if (!called) {
                        called = true;
                        promise.reject(r);
                    }
                });
            } else {
                promise.fulfill(x);
            }
        } catch (e) {
            if (!called) {
                called = true;
                promise.reject(e);
            }
        }
    } else {
        promise.fulfill(x);
    }
}

function Taxi() {
    var _state = 0,
        _value,
        _onFulfills = [],
        _onRejects = [];
    this.done = function (onFulfilled, onRejected) {

        if (_state === 0) {
            _onFulfills.push(onFulfilled);
            _onRejects.push(onRejected);
        } else {
            // 否则,异步执行
            asyncCall(function () {
                if (_state === 1) {
                    if (typeof onFulfilled === 'function') {
                        onFulfilled(_value);
                    }
                } else if (typeof onRejected === 'function') {
                    onRejected(_value);
                }
            });
        }
    };
    function _complete(state, value) {
        if (!_state) {
            _state = state;
            _value = value;
            asyncCall(function () {
                var handlers = state == 1 ? _onFulfills : _onRejects;
                handlers.forEach(function (fn) {
                    if (typeof fn === 'function') {
                        fn(value);
                    }
                });
                _onFulfills = null;
                _onRejects = null;
            });
        }
    }

    this.fulfill = function (value) {
        _complete(1, value);
    };
    this.reject = function (value) {
        _complete(2, value);
    };
}

Taxi.prototype = {
    constructor: Taxi,
    catch: function (onRejected) {
        this.then(null, onRejected);
    },
    then: function (onFulfilled, onRejected) {
        var taxi = new Taxi();
        this.done(function (x) {
            if (typeof onFulfilled === 'function') {
                try {
                    resolve(taxi, onFulfilled(x));
                } catch (e) {
                    taxi.reject(e);
                }
            } else {
                taxi.fulfill(x);
            }
        }, function (x) {

            if (typeof onRejected === 'function') {
                try {
                    resolve(taxi, onRejected(x));
                } catch (e) {
                    taxi.reject(e);
                }
            } else {
                taxi.reject(x);
            }
        });
        return taxi;
    }
};
module.exports = Taxi;