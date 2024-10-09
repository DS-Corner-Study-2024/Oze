// 3.3.2 ECMAScript 모듈


import { odd, even } from './var.mjs';

function checkOddorEven(num) {
    if(num % 2)
        return odd;
    return even;
}

export default checkOddorEven;