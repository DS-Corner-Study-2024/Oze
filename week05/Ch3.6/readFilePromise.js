// fs는 콜백 형식의 모듈이므로 실무에서 사용 불편 -> fs 모듈을 프로미스 형식으로 바꿔줌

const fs = require('fs').promises;

fs.readFile('./Ch3.6/readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString);
    })
    .catch((err) => {
        console.error(err);
    });