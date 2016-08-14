//"name=zfpx./fl56ix3wcE%2BNLeDcWO%2BHcRW2Ucclhe4CnQvZKr%2BayY"
//zfpx./fl56ix3wcE+NLeDcWO+HcRW2Ucclhe4CnQvZKr+ayY
//zfpx222./fl56ix3wcE+NLeDcWO+HcRW2Ucclhe4CnQvZKr+ayY
var crypto = require('crypto');
var sign = function(val, secret){
    return val + '.' + crypto
            .createHmac('sha256', secret)
            .update(val)
            .digest('base64')
            .replace(/\=+$/, '');
};

console.log(sign('zfpx2','zfpx'));