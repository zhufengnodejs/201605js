var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/201605crawl');
exports.Novel = mongoose.model('Novel',new mongoose.Schema({
    name:String,
    url:String
}))