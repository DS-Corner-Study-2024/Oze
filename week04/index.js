// 3.3.1 CommonJs 모듈 예제

const { odd, even } = require('./var').default;
const checkNumber = require('./func');

function checkOddorEven(str) {
    if (str.length % 2) 
        return odd;
    return even;
}

console.log(checkNumber(10));
console.log(checkOddorEven('hello'));
