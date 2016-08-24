var str = 'zfpx is 8 years old';
String.prototype.includes = function(sub,pos){
    return this.slice(pos).indexOf(sub)!=-1;
}
String.prototype.startsWith = function(sub,pos){
    return this.slice(pos).indexOf(sub) == 0;
}
String.prototype.endsWith = function(sub,pos){
    return this.slice(0,pos).indexOf(sub) == this.slice(0,pos).length-sub.length;
}
/*
//父串是否包含子串
console.log(str.includes('years'));
//父串是否以子串开头
console.log(str.startsWith('zfpx'));
//父串是否以子串结尾
console.log(str.endsWith('abc'));
*/

var str2 = 'zfpx';
/*
console.log(str2.startsWith('f',1));
console.log(str2.includes('f',2));
console.log(str2.endsWith('p',3));
console.log('abc'.repeat(2));*/

var str2 = 'chen chao zhen shuai';
console.log(str2.startsWith('h', 1));
console.log(str2.endsWith('e', 3));
console.log(str2.includes('h', 1));
