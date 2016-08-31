function getP(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.random();
            if (true) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 500)
    });
}
var p1 = getP();
var p2 = getP();

//静态方法可以通过类名来调用，不需实例
//all表示所有的promise都是与的关系，全部成功之后才会表示成功并调用成功的回调
//all方法会返回一个新的promise,当所有的promise都成功之后，才会调用此promise的成功方法
/*Promise.all([p1,p2,'1']).then(function(result){
    console.log(result);
});*/
/*
//也是接收一个promise数组，只要有一个promise成功了，就直接调用成功的回调
Promise.race([p1,p2]).then(function(result){
    console.log(result);
});*/
// express的时候渲染模板
var obj = {name:'zfpx'};
/**
 * 一个 promise取模板
 * 一个 promise取数据
 * Promise.resolve 返回一个成功态的promise实例 ，值就是参数
 */
Promise.all([readTmpl(),Promise.resolve(obj)]).then(function(result){
    var tmpl = result[0];//得到模板内容
    var data = result[1];//得到数据对象

});

