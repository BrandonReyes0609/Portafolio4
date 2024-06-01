import React from 'react';
import './Habilidades.css';
import { Element, Link } from 'react-scroll';
import CarouselComponent from './CarouselComponent';

function Habilidades() {
  return (
    <Element name="habilidades" className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="col">
          <h2>Dsarollo Profesional</h2>
          <ul>
            <li>Experiencia laboraldesarrolo WEB en ABogados, Notarios y Auditores</li>
            <li>Experiencia en auxiiatura Algoritmos y Programación Básica</li>
            <li>Expereicenia en Google ADS</li>
            <li></li>
          </ul>
          <CarouselComponent />
          <Link to="app" smooth={true} duration={500} className="btn btn-primary mt-5">
            Go Back
          </Link>
        </div>
      </div>
    </Element>
  );
}

export default Habilidades;
