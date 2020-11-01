import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);