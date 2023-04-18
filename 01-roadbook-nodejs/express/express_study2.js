const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port') + '포트 에서 실행중.');
});
