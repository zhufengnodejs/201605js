class Person{
    //构造函数
    constructor(name){
        this.name = name;
        this.cookies = [];
    }
    getName(){
        console.log(this.name);
    }
    set cookie(cookie){//set器
        this.cookies.push(cookie);
    }
    get cookie(){//get
        return this.cookies.join('; ');
    }
}
/*function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}*/
let long = new Person('张龙');
long.cookie = 'name=zfpx';
long.cookie = 'age=8';
console.log(long.cookie);
let hu = new Person('赵虎');
console.log(long == hu);
console.log(long.name == hu.name);
console.log(long.getName == hu.getName);


