import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KOApp from './KOApp';
import reportWebVitals from './reportWebVitals';
import CNApp from './CNApp'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <KOApp />
  </React.StrictMode>,
  document.getElementById('KOroot')
);

ReactDOM.render(
  <React.StrictMode>
    <CNApp />
  </React.StrictMode>,
  document.getElementById('CNroot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
