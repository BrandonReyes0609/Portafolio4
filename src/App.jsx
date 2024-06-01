import React from 'react';
import './App.css';
import fotoperfil from './assets/foto_perfil.jpeg'; // Importar la imagen
import { Link, Element } from 'react-scroll';

function App() {
  return (

    <Element name="app" className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">


      <div className="row w-100 d-flex">
        <div className="text-container">
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '50%' }}>
                Brandon Javier Reyes Morales
              </p>
              
            </div>
            <Link to="habilidades" smooth={true} duration={500} className="btn btn-primary mt-5">
                Next
            </Link>
          </div>
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '90%' }}>
                Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <p className="text-start typing-animation" style={{ width: '60%' }}>
                Universidad del Valle de Guatemala
              </p>
            </div>
          </div>
        </div>
        
        <div className="image-container">
          <img src={fotoperfil} alt="fotoperfil" style={{ width: '50%', height: 'auto' }} className="rounded-circle" />
        </div>
        
      </div>

    </Element>
  );
}

export default App;
