/*
const MY_NAME = 'zfpx';
MY_NAME = 'zfpx2';*/
//常量是指此变量引用的堆内存里的对象地址不能修改
//但是此对象的属性值是可以修改的
const names = ['node','js','java'];
names.push('javascript');
names.shift();
console.log(names);

//不同的块级作用域是可以重复的
{
    const names = ['newjs','newjava'];
    console.log(names);
}
