import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css';
import './css/custon.css';

function tick(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

reportWebVitals();
