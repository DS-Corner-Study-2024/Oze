const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data); // 인수 클라이언트로 보내고 응답 종료
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
}) 
.listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
})