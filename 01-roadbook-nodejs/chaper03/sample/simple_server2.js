const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>node js 서버</h1>');
    res.end('<p>http 모듈 공부중.</p>');
}).listen(8080, () => {
    console.log('8080포트에서 실행됨');
});
