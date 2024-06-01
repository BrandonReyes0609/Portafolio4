import React from 'react';
import './Languajes.css';
import { Element, Link } from 'react-scroll';
import python from './assets/img/python.png';
import bootstrap1 from './assets/img/bootstrap.png';
import csp1 from './assets/img/csp.png';
import css1s from './assets/img/css.png';
import html1 from './assets/img/html.png';
import java1 from './assets/img/java.png';
import js1 from './assets/img/js.png';
import php1 from './assets/img/php.png';
import react1 from './assets/img/reat.png';
import vite1 from './assets/img/vite.png';


import mariadb1 from './assets/img/mariadb.png';
import mysql1 from './assets/img/mysql.png';
import postgres1 from './assets/img/postgres.png';

  const Languajes = () => {
    return (
      <Element name="languajes" className="table-container">
        <h2>Lenguajes de Programación</h2>
        <div className="row w-100 d-flex">
        <div className="col">


          <table>
            <tbody>
              <tr>
                <td>Python</td>
                <td><img src={python} alt="Imagen 1" /></td>

              </tr>
              <tr>
                <td>JavaScript</td>
                <td><img src={js1} alt="JavaScript" /></td>
              </tr>
              <tr>
                <td>Java</td>
                <td><img src={java1} alt="Java" /></td>
              </tr>
              <tr>
                <td>C#</td>
                <td><img src={csp1} alt="C#" /></td>
              </tr>
              <tr>
                <td>PHP</td>
                <td><img src={php1} alt="PHP" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Lenguajes de Marcado y Estilo</h2>
          <table>
            <tbody>
              <tr>
                <td>HTML</td>
                <td><img src={html1} alt="HTML" /></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td><img src={css1s} alt="CSS" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Frameworks y Librerías</h2>
          <table>
            <tbody>
              <tr>
                <td>React</td>
                <td><img src={react1} alt="React" /></td>
              </tr>
              <tr>
                <td>Bootstrap</td>
                <td><img src={bootstrap1} alt="Bootstrap" /></td>
              </tr>
              <tr>
                <td>Vite</td>
                <td><img src={vite1} alt="Vite" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Bases de Datos</h2>
          <table>
            <tbody>
              <tr>
                <td>PostgreSQL</td>
                <td><img src={postgres1} alt="PostgreSQL" /></td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td><img src={mysql1} alt="MySQL" /></td>
              </tr>
              <tr>
                <td>MariaDB</td>
                <td><img src={mariadb1} alt="MariaDB" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="habilidades" smooth={true} duration={500} className="btn btn-secondary mt-8">
        Back  
      </Link>
      <Link to="proyectos" smooth={true} duration={500} className="btn btn-primary mt-8">
        Next  
      </Link>

      
      </div>
    </Element>
  );
};

export default Languajes;
