// 3.3.1 CommonJs 모듈 예제

const { odd, even } = require('./var').default;

function checkOddorEven(num) {
    if (num % 2)
        return odd;
    return even;
}

module.exports = checkOddorEven;