// 서버 역할 
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express(); // Express 모듈 실행해 app 변수에 할당
app.set('port', process.env.PORT || 3000); // 데이터 저장

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

/*
app.use((req, res, next) => { // 미들웨어, next : 다음 미들웨어로 넘어가는 함수
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/', (req, res, next) => { // 주소에 대한 GET 요청 올 때 동작(데이터 가져옴)
    console.log('GET / 요청에서만 실행됩니다.');
    next();
    // res.sendFile(path.join(__dirname, '/index.html')); // GET 요청 시 응답
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
*/

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중'); // 포트 연결, 서버 실행
});

