import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import List from './components/List';
import List1 from './components/List1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <List1 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
