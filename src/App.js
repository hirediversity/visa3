import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';


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



function App() {

  const [box, setBox] = useState(false)

  return (
    <div className="App">
      <div id="search">
        
        <p id='title'>* 외국인등록증 신청 현황 조회 *</p>
        <input id="email" placeholder='e-mail'></input>
        <input id="rcNumber" placeholder='password'></input>
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {
          setBox(true);
          }}>Login</button>

          <p id='loginform'>If you can't log in please try again 5 minutes later, do not refresh the page.
          </p>
       
          <div id="loading" className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
     

      </div>
      <p></p>
      <div className="container">
          {
            box === true
            ? 
            <Content 
            data={data}
            pw={document.getElementById('rcNumber').value}
            em={document.getElementById('email').value}
            inputs={document.getElementById('search')}
            loading={document.getElementById('loading')}
            logo={document.getElementById('hirelogo')}
            />
            : null
          }
      </div>
    </div>
  )
}


export default App
