import React from 'react';
import './Proyectos.css';
import { Element, Link } from 'react-scroll';
import CarouselComponentProyecto from './CarouselComponentProyecto';

function Proyectos() {
  return (
    <Element name="proyectos" className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="col">
          <h2>Proyectos</h2>
          <p>Aquí puedes añadir información sobre tus proyectos.</p>
          <ul>
            <li>Proyecto base de datos</li>
            <li>Portafolio</li>
            <li>Proyecto  Ingenieria Software</li>
          </ul>
          <Link to="habilidades" smooth={true} duration={500} className="btn btn-primary mt-5">
            Ver Habilidades
          </Link>
          <CarouselComponentProyecto />
          <Link to="languajes" smooth={true} duration={500} className="btn btn-secondary mt-3">
            Ver Lenguajes
          </Link>
        </div>
      </div>
    </Element>
  );
}

export default Proyectos;
