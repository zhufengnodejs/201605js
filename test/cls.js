/*class Person {
    constructor(name) {
        //属于实例私有
        this.name = name;
    }
    eat(){
        console.log('吃饭');
    }
}*/
function Person(name){
    this.name = name;
}
Person.prototype.eat = function(){

}
var p1 = new Person('龙娟');
var p2 = new Person('荣霞');
console.log(p1.eat === p2.eat);