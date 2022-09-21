import React, { useState } from 'react';
import './App.css';
import KOContent from './components/KOContent';


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyKAqTJ3bNMIGK2O'}).base('appL44cwktJKhNKIP');
const table = base('신규 업무 처리');
const data = [];

const getRecords = async () => {
  const records = await table.select({
      maxRecords: 99999,
      view: 'APP용'
  }).eachPage((lists, fetchNextPage) => {
    lists.forEach((list) => data.push(list.fields))
    fetchNextPage();
  });
}

getRecords();


function KOApp() {

  const [box, setBox] = useState(false)

  return (
    <div className="App">
      <div id="search1">
        
        <p id='title'>* 외국인등록증 신청 현황 조회 *</p>
        <input id="email1" placeholder='이메일'></input>
        <input id="rcNumber1" placeholder='비밀번호'></input>
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {
          setBox(true);
          }}>로그인</button>

          <p id='loginform'>로그인이 안 되는 경우 페이지 새로고침을 하지 말고 5분 뒤에 다시 시도해 주세요</p>
       
          <div id="loading1" className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
     

      </div>
      <p></p>
      <div className="container">
          {
            box === true
            ? 
            <KOContent 
            data={data}
            pw={document.getElementById('rcNumber1').value}
            em={document.getElementById('email1').value}
            inputs={document.getElementById('search1')}
            loading={document.getElementById('loading1')}
            logo={document.getElementById('hirelogo')}
            />
            : null
          }
      </div>
    </div>
  )
}

export default KOApp
