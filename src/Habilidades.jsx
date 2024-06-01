import React from 'react';
import './Habilidades.css';
import { Element, Link } from 'react-scroll';
import CarouselComponent from './CarouselComponent';

function Habilidades() {
  return (
    <Element name="habilidades" className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="col">
          <h2>Habilidades</h2>
          <ul>
            <li>Desarrollo Web</li>
            <li>Ingeniería de Software</li>
            <li>Gestión de Proyectos</li>
            <li>Resolución de Problemas</li>
          </ul>
          <CarouselComponent />
          <Link to="languajes" smooth={true} duration={500} className="btn btn-primary mt-5">
            Ver Lenguajes
          </Link>
          <Link to="app" smooth={true} duration={500} className="btn btn-secondary mt-3">
            Regresar a Inicio
          </Link>
        </div>
      </div>
    </Element>
  );
}

export default Habilidades;
