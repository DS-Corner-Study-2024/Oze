const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
});

http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8081, () => { // 포트 번호 달라야 함. 포트 번호 같으면 EADDRINUSE 에러 발생. 실무에서는 서버 여러 개 띄우지 않음.
    console.log('8081번 포트에서 서버 대기 중입니다!');
});