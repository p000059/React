import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import Brand from './components/Brand';
import Car from './components/Car'
import ListCar from './components/ListCar';
import Form from './components/Form';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(

    <React.StrictMode >
    <App title="Título1">
        Conteúdo contido dentro da tag App1!
    </App>
    <App2 brand="Desktop">
        
    </App2>
    <Car>
    </Car>
    <Brand brand="br"></Brand>
    <ListCar></ListCar>
    <Form></Form>
    </React.StrictMode>,

    document.getElementById('root')
);


reportWebVitals();