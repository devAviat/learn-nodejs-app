const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser('secret@1234'));
app.use(
    session({
        secret: 'secret@1234',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
        },
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    if (req.session.name) {
        const outPut = `<h2>로그인 사용자님</h2>
        <p>${req.session.name}님 안녕하세요.</p>`;
        res.send(outPut);
    } else {
        const outPut = `<h2>로그인하지 않은 사용자</h2>
        <p>로그인 해주세요.</p>`;
        res.send(outPut);
    }
});

app.get('/login', (req, res) => {
    //쿠키를 사용할 경우
    //res.cookie(name, value, options)

    //세션 쿠키를 사용할때
    req.session.name = '로드북';
    console.log(req.session);
    res.send('login ok');
});

app.get('/logout', (req, res) => {
    res.clearCookie('connect.sid');
    res.send('logout ok');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '포트에서 실행중.');
});
