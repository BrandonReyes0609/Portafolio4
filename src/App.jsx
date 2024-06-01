import { useState } from 'react';
import './App.css';
import fotoperfil from './assets/foto_perfil.jpeg'; // Importar la imagen

function App() {
  return (
    <>
      <div className="container-fluid col p-3 bg-dark text-white">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col p-3 bg-dark text-white">
                <p className="text-start">Brandon Javier Reyes Morales</p>
              </div>
            </div>
            <div className="row">
              <div className="col p-3 bg-dark text-white">
                <p className="text-start">Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información</p>
              </div>
            </div>
            <div className="row">
              <div className="col p-3 bg-dark text-white">
                <p className="text-start">Universidad del Valle de Guatemala</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={fotoperfil} alt="fotoperfil" style={{ width: '50%', height: 'auto' }} className="rounded-circle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;