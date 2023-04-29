import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

function tick(){
  
  ReactDOM.render(
    <React.StrictMode>
      <div>
        <App />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)

reportWebVitals();
