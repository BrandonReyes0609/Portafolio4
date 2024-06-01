import React from 'react';
import './App.css';
import fotoperfil from './assets/foto_perfil.jpeg'; // Importar la imagen

function App() {
  return (
    <div className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="text-container">
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '50%' }}>
                Hola! soy Brandon Javier Reyes Morales
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '90%' }}>
                Actualmente soy Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '60%' }}>
                de la Universidad del Valle de Guatemala
              </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={fotoperfil} alt="fotoperfil" style={{ width: '30%', height: 'auto' }} className="rounded-circle" />
        </div>
      </div>
    </div>
  );
}

export default App;
