var express = require('express');
var Novel = require('./tasks/db').Novel;
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname);
app.get('/',function(req,res){
    Novel.find({}).then(function(novels){
        res.render('index',{
            novels:novels
        });
    }).catch(function(err){
        res.statusCode = 500;
        res.send(err);
    });
});
app.listen(80);