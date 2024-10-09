// require.cache와 require.main을 알아보자

/* require은 모듈을 불러오는 함수. ( 모듈 : 특정한 기능을 하는 함수/변수들의 집합 )

require.cache 객체에는 파일 이름이 속성명, 속성값은 각 파일의 모듈 객체
한번 require한 파일은 require.cache에 저장되므로 다음 번에는 require.cache에  있는 것이 재사용됨 

require.main은 노드 실행시 첫 모듈을 가리킴. */



console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var').default;

console.log('requrie.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);