const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 8080);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 라우팅 설정 */
app.get('/airCode', async (req, res) => {
    const serviceKey = process.env.AIRPORT_KEY_E;
    const airUrl =
        'http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?';

    let parmas = encodeURI('serviceKey') + '=' + serviceKey;
    parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('2');

    const url = airUrl + parmas;

    try {
        const result = await axios.get(url);
        res.json(result.data); // .data
    } catch (error) {
        console.log(error);
    }
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..');
});
