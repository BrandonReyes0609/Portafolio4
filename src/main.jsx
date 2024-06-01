import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Habilidades from './Habilidades';
import Languajes from './Languajes';
import Proyectos from './Proyectos';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Habilidades />
    <Languajes />
    <Proyectos />
  </React.StrictMode>,
  document.getElementById('root')
);