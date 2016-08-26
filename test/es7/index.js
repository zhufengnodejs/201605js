import "babel-polyfill";
async function asyncFunc(initValue){
    let first = await new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,'first');
    });
    let second = await new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,first+'-second');
    });
    console.log(second);
}
asyncFunc().then(data=>{
    console.log(data);
})