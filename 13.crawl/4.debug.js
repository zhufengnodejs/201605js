//debug用来记录我们的日志的 或调试信息的
var debug = require('./debug');
/**
 * 日志记录器在输出日志的时候会判断
 * 环境变量中的DEBUG变量是否匹配当前日志记录器的名称
 */
var logger1 = debug('logger:1');
logger1('logger1日志');

var logger2 = debug('logger:2');
logger2('logger2日志');
