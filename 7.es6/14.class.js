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
    //定义属于类的方法，不需要实例化就可以使用
    static add(a,b){
        return a+b;
    }
}
console.log(Person.add(1,2));
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


class Teacher extends Person{
    constructor(name,age){
        super(name);//一定要先调用父类的构造函数
        this.age = age;
    }
}
var teacher = new Teacher('zfpx',8);
console.log(teacher.name,teacher.age);