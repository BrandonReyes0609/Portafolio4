import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Habilidades from './Habilidades';
import Languajes from './Languajes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Habilidades />
    <Languajes />
  </React.StrictMode>,
  document.getElementById('root')
);
