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
          <p>_</p>
          <ul>
            <li>
              <a href="https://github.com/BrandonReyes0609/proyecto-2_db_Heroku.git" target="_blank" rel="noopener noreferrer">
                Proyecto base de datos
              </a>
            </li>
            <li>
              <a href="https://github.com/BrandonReyes0609/Portafolio4.git" target="_blank" rel="noopener noreferrer">
                Portafolio
              </a>
            </li>
            <li>
              <a href="https://github.com/paulabaal12/PROY-SOFTWARE.git" target="_blank" rel="noopener noreferrer">
                Proyecto Ingenieria Software
              </a>
            </li>
          </ul>
          <CarouselComponentProyecto />

      </div>
        <Link to="languajes" smooth={true} duration={500} className="btn btn-secondary mt-5">
          Back
        </Link>
        <Link to="app" smooth={true} duration={500} className="btn btn-primary mt-5">
          Next
        </Link>

      </div>
    </Element>
  );
}

export default Proyectos;
