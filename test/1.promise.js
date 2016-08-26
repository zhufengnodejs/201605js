class Promise {
    constructor(fn) {
        fn((data)=> {
            this.success(data);
        }, (error)=> {
            this.error();
        });
    }

    resolve(data) {
        this.success(data);
    }

    reject(error) {
        this.error(error);
    }

    then(success, error) {
        this.success = success;
        this.error = error;
        console.log(this);
    }
}


function Promise(fn) {
    fn((data)=> {
        this.success(data);
    }, (error)=> {
        this.error();
    });
}

Promise.prototype.resolve = function (data) {
    this.success(data);
}

Promise.prototype.reject = function (error) {
    this.error(error);
}

Promise.prototype.then = function (success, error) {
    this.success = success;
    this.error = error;
}


var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (true) {
            resolve('success');
        } else {
            reject('error');
        }
    }, 1000)
});
promise.then(function (data) {
    console.log(data);
}, function (error) {
    console.error(error);
});