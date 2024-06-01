import React from 'react';
import './Languajes.css';
import { Element, Link } from 'react-scroll';
import python from './assets/img/python.png';
const Languajes = () => {
  return (
    <Element name="languajes" className="table-container">
      <h2>Lenguajes de Programación</h2>
      <table>
        <tbody>
          <tr>
            <td>Python</td>
            <td><img src="./assets/img/python.png" alt="Python" /></td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td><img src="./assets/javascript.png" alt="JavaScript" /></td>
          </tr>
          <tr>
            <td>Java</td>
            <td><img src="./assets/java.png" alt="Java" /></td>
          </tr>
          <tr>
            <td>C#</td>
            <td><img src="./assets/csharp.png" alt="C#" /></td>
          </tr>
          <tr>
            <td>C++</td>
            <td><img src="./assets/cplusplus.png" alt="C++" /></td>
          </tr>
          <tr>
            <td>PHP</td>
            <td><img src="./assets/php.png" alt="PHP" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Lenguajes de Marcado y Estilo</h2>
      <table>
        <tbody>
          <tr>
            <td>HTML</td>
            <td><img src="./assets/html.png" alt="HTML" /></td>
          </tr>
          <tr>
            <td>CSS</td>
            <td><img src="./assets/css.png" alt="CSS" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Frameworks y Librerías</h2>
      <table>
        <tbody>
          <tr>
            <td>React</td>
            <td><img src="./assets/react.png" alt="React" /></td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td><img src="./assets/bootstrap.png" alt="Bootstrap" /></td>
          </tr>
          <tr>
            <td>Vite</td>
            <td><img src="./assets/vite.png" alt="Vite" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Bases de Datos</h2>
      <table>
        <tbody>
          <tr>
            <td>PostgreSQL</td>
            <td><img src="./assets/postgresql.png" alt="PostgreSQL" /></td>
          </tr>
          <tr>
            <td>MySQL</td>
            <td><img src="./assets/mysql.png" alt="MySQL" /></td>
          </tr>
          <tr>
            <td>MariaDB</td>
            <td><img src="./assets/mariadb.png" alt="MariaDB" /></td>
          </tr>
          <tr>
            <td>Oracle</td>
            <td><img src="./assets/oracle.png" alt="Oracle" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Herramientas de Desarrollo</h2>
      <table>
        <tbody>
          <tr>
            <td>KNIME</td>
            <td><img src="./assets/knime.png" alt="KNIME" /></td>
          </tr>
          <tr>
            <td>Android Studio</td>
            <td><img src="./assets/androidstudio.png" alt="Android Studio" /></td>
          </tr>
          <tr>
            <td>Visual Studio Code</td>
            <td><img src="./assets/vscode.png" alt="Visual Studio Code" /></td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td><img src="./assets/github.png" alt="GitHub" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Plataformas y Servicios en la Nube</h2>
      <table>
        <tbody>
          <tr>
            <td>Heroku</td>
            <td><img src="./assets/heroku.png" alt="Heroku" /></td>
          </tr>
          <tr>
            <td>Amazon AWS</td>
            <td><img src="./assets/aws.png" alt="Amazon AWS" /></td>
          </tr>
          <tr>
            <td>Netlify</td>
            <td><img src="./assets/netlify.png" alt="Netlify" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Herramientas de Diseño y Prototipado</h2>
      <table>
        <tbody>
          <tr>
            <td>Figma</td>
            <td><img src="./assets/figma.png" alt="Figma" /></td>
          </tr>
          <tr>
            <td>Canva</td>
            <td><img src="./assets/canva.png" alt="Canva" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Herramientas de Productividad y Colaboración</h2>
      <table>
        <tbody>
          <tr>
            <td>Google Drive</td>
            <td><img src="./assets/googledrive.png" alt="Google Drive" /></td>
          </tr>
          <tr>
            <td>Google</td>
            <td><img src="./assets/google.png" alt="Google" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Navegadores</h2>
      <table>
        <tbody>
          <tr>
            <td>Firefox</td>
            <td><img src="./assets/firefox.png" alt="Firefox" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Sistemas Operativos</h2>
      <table>
        <tbody>
          <tr>
            <td>Windows</td>
            <td><img src="./assets/windows.png" alt="Windows" /></td>
          </tr>
          <tr>
            <td>Mac</td>
            <td><img src="./assets/mac.png" alt="Mac" /></td>
          </tr>
          <tr>
            <td>Linux Arch/Manjaro</td>
            <td><img src="./assets/arch.png" alt="Linux Arch/Manjaro" /></td>
          </tr>
        </tbody>
      </table>

      <h2>Herramientas de Diagramación</h2>
      <table>
        <tbody>
          <tr>
            <td>yEd</td>
            <td><img src="./assets/yed.png" alt="yEd" /></td>
          </tr>
        </tbody>
      </table>

      <Link to="habilidades" smooth={true} duration={500} className="btn btn-primary mt-5">
        Ver Habilidades
      </Link>
      <Link to="proyectos" smooth={true} duration={500} className="btn btn-secondary mt-3">
        Ver Proyectos
      </Link>
    </Element>
  );
};

export default Languajes;
