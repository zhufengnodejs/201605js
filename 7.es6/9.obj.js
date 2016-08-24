let name = 'zfpx';
let age = 8;

//console.log(this === module.exports);
let getName = function(){
    console.log(this.name);
}
let person = {
    name,
    age,
    getName
}
//person.getName();

//console.log(NaN == NaN);
//console.log(Object.is(NaN,NaN));
var nameObj = {name:'zfpx'};
var ageObj = {age:8};
//var obj = {};
Object.assign = function(target,...sources){
    function copy(target,source){
        var sourceType = Object.prototype.toString.call(source);
        if(sourceType == '[object Object]'){
            for(let attr in source){
                var str = Object.prototype.toString.call(source[attr]);
                //如果是一个对象
                if(str == '[object Object]'){
                    var newObj = {};//构建一个空对象
                    copy(newObj,source[attr]);
                    target[attr] = newObj;
                }else if(str == '[object Array]'){//如果属性是一个数组
                    var newArr = [];
                    copy(newArr,source[attr]);
                    target[attr] = newArr;
                }else{
                    //当属性是值的时候直接赋值
                    target[attr] =source[attr];
                }
            }
        }else if(sourceType == '[object Array]'){
            for(var i=0;i,source.length;i++){
                target[i] = source[i];
            }
        }

    }
    sources.forEach(source=>{
        copy(target,source);
    });
}
var obj = {};
var source = {hobbies:['smoking','drinking']}
Object.assign(obj,source);
console.log(obj);
console.log(source);
obj.hobbies.push('hair');
console.log('======================');
console.log(obj);
console.log(source);