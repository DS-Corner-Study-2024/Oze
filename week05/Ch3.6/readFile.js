const fs = require('fs');

fs.readFile('./Ch3.6/readme.txt', (err, data) => { // 경로는 cmd의 현재 위치 기준
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});