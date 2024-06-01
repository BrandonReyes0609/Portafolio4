import React from 'react';
import './Habilidades.css';
import { Element, Link } from 'react-scroll';
import CarouselComponent from './CarouselComponent';

function Habilidades() {
  return (
    <Element name="habilidades" className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="col">
          <h2><p className="text-start typing-animation" style={{ width: '50%' }}>Desrrollo Profesional</p></h2>
          <ul>
            <li><p className="text-start typing-animation" style={{ width: '50%' }}>Desarrollo Web en Abogados, Noratiors y Auditores</p></li>
            <li><p className="text-start typing-animation" style={{ width: '50%' }}>Auxliar en algoritmos y programación básica</p></li>
          </ul>
          <CarouselComponent />
          
          

        </div>
        <Link to="app" smooth={true} duration={500} className="btn btn-secondary mt-5">
            Back
          </Link>
        <Link to="languajes" smooth={true} duration={500} className="btn btn-primary mt-5">
            Next
          </Link>

      </div>
    </Element>
  );
}

export default Habilidades;
