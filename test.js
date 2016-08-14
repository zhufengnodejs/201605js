/*
// /^\/user\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i,

var str = '/user/:name/:age';
var res = str.replace(/\//g,'\\/');

res = res.replace(/:([^\/]+)/g,'([^\/]+?)')
console.log(res);*/

var obja = {name:'zfpx'};
var objb = {name:'zfpx2'};
var objc = {};
for(var attr in obja)
    objc[attr]= obja[attr];

for(var attr in objb)
    objc[attr]= objb[attr];
console.log(objc)