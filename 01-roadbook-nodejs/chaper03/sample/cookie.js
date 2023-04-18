const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Set-cookie': 'name=book' });
    console.log(req.headers.cookie);
    res.end('Cookie --> Header');
}).listen(8080, () => {
    console.log('8080포트에서 실행중.');
});
