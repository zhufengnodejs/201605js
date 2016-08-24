var books = new Set();
books.add('js');
books.add('node');
books.add('js');
console.log(books.size);
books.forEach(function(item){
    console.log(item);
});
console.log(books.has('node'));
books.delete('node');
console.log(books.has('node'));
books.clear();
console.log(books.size);

var books = new Map();
books.set('js',{name:'js'});//向map中添加元素
books.set('html',{name:'html'});
console.log(books.size);//查看集合中的元素
console.log(books.get('js'));//通过key获取值
books.delete('js');//执照key删除元素
console.log(books.has('js'));//判断map中有没有key
books.forEach((value, key) => { //forEach可以迭代map
    console.log( key + ' = ' + value);
});
books.clear();//清空map
console.log(books.size);