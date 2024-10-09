// 3.3.3 다이내믹 임포트

// 다이내믹 임포트 : 동적 불러오기
// CommonJs 모듈에서는 가능, ES 모듈에서는 불가능

const a = false;
if (a) {
    require('./func');
}
console.log('성공');