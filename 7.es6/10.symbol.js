/*let s = Symbol('zfpx1');
console.log(s);*/

/*
var luckNum = Symbol();
var person = {};
person[luckNum] = 9;
console.log(person[luckNum]);*/
console.log(Symbol() == Symbol());
const Operator = {
    add:Symbol(),
    minus:Symbol()
}

function calc(operator,a,b){
    switch(operator){
        case Operator.add:
            return a+b;
            break;
        case Operator.minus:
            return a-b;
            break;
    }
}
console.log(calc(Operator.add,1,2));
console.log(calc(Operator.minus,4,2));