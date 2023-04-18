const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

const myLogger = () => {
    console.log('LOGGED');
};

app.use(myLogger);
app.listen(8080);
//log LOGGED 확인 불가.
