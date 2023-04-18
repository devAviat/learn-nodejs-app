### title : 한국공항공사\_항공기 운항정보

### 통및물류 - 항공·공항

### 제공 : 한국공항공사

### 유형 : REST

### URL : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000126

### END Point : http://openapi.airport.co.kr/service

### 1. 공항 코드:

##### END POINT URL: http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList

| 항목명(영문) | 항목명(국문) | 항목크기 | 항목구분 | 샘플데이터 | 항목설명    |
| ------------ | ------------ | -------- | -------- | ---------- | ----------- |
| serviceKey   | 인증키       | 100      | 필수     |            | 인증키      |
| pageNo       | 페이지 번호  | 4        | 필수     | 1          | 페이지 번호 |

### 2. 국내선 운항 스케줄

##### END POINT URL: http://openapi.airport.co.kr/service/rest/DflightScheduleList/getDflightScheduleList

| 항목명(영문)    | 항목명(국문)   | 항목크기 | 항목구분 | 샘플데이터 | 항목설명       |
| --------------- | -------------- | -------- | -------- | ---------- | -------------- |
| serviceKey      | 인증키         | 100      | 필수     |            | 인증키         |
| schDate         | 검색일자       | 8        | 옵션     | 20121010   | 검색일자       |
| schDeptCityCode | 도착 도시 코드 | 3        | 옵션     | GMP        | 도착 도시 코드 |
| schArrvCityCode | 출항 도시 코드 | 3        | 옵션     | PUS        | 출항 도시 코드 |
| schAirLine      | 항공편 코드    | 2        | 옵션     | AB         | 항공편 코드    |
| schFlightNum    | 항공편 넘버    | 20       | 옵션     | 1          | 항공편 넘버    |
| pageNo          | 페이지 번호    | 4        | 옵션     | 1          | 페이지 번호    |

### 3. 국제선 운항 스케줄

##### END POINT URL: http://openapi.airport.co.kr/service/rest/IflightScheduleList/getIflightScheduleList

| 항목명(영문)    | 항목명(국문)   | 항목크기 | 항목구분 | 샘플데이터 | 항목설명       |
| --------------- | -------------- | -------- | -------- | ---------- | -------------- |
| serviceKey      | 인증키         | 100      | 필수     |            | 인증키         |
| pageNo          | 페이지 번호    | 4        | 필수     | 1          | 페이지 번호    |
| schDate         | 검색일자       | 8        | 옵션     | 20151005   | 검색일자       |
| schDeptCityCode | 도착 도시 코드 | 3        | 옵션     | GMP        | 도착 도시 코드 |
| schArrvCityCode | 출항 도시 코드 | 3        | 옵션     | HND        | 출항 도시 코드 |
| schAirLine      | 항공편 코드    | 2        | 옵션     | NH         | 항공편 코드    |
| schFlightNum    | 항공편 넘버    | 20       | 옵션     | NH862      | 항공편 넘버    |

### 4. 실시간 현황 정보.

##### END POINT URL: http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList

| 항목명(영문) | 항목명(국문) | 항목크기 | 항목구분 | 샘플데이터 | 항목설명       |
| ------------ | ------------ | -------- | -------- | ---------- | -------------- |
| schStTime    | 예정시간     | 10       | 옵션     | 0600       | 예정시간       |
| schEdTime    | 변경시간     | 10       | 옵션     | 1800       | 변경시간       |
| schLineType  | 항공편종류   | 2        | 옵션     | D / I      | 국내 / 국제    |
| schIOType    | 운행타입     | 2        | 옵션     | I / 0      | 도착 도시 코드 |
| schAirCode   | 공항코드     | 6        | 옵션     | GMP        | 출항 도시 코드 |
| serviceKey   | 인증키       | 100      | 필수     |            | 항공편 코드    |
| pageNo       | 페이지 번호  | 4        | 필수     | 1          | 항공편 넘버    |
