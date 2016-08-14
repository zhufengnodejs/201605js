/**
 * md5是一个摘要算法 sha1
 * 1. 把任意输入转成固定长度的输出
 * 2. 无法从输出的结果推算出来输入的内容
 * 3. 如果输入内容是一样的，那么输出内容也是一定的
 * 4. 不同的输入会产生不同的输出
 */
var crypto = require('crypto');
var res = crypto.createHash('md5')//创建摘要算法
    .update('abcabc') //指定源字符串 加工前的字符串
    .digest('hex')//进入摘要输出
console.log(res);
/**
 * 1.实现密码的加密 123 -> xxxx
 **/

var res = crypto.createHmac('sha1','zfpx')
    .update('1') //指定源字符串 加工前的字符串
    .digest('hex')//进入摘要输出
console.log(res);