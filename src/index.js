import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'
import App from './App'



ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>, 
    document.getElementById('root')
);


