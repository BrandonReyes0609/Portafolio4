import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponentProyecto.css'; // Si necesitas estilos adicionales

import img1 from './assets/PoryectoDB2.png';
import img2 from './assets/portafolio.png';
import img3 from './assets/software.png';

const CarouselComponentProyecto = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={img1} alt="Imagen 1" />
        </a>
        <p className="legend">Proyecto de app para restaurantes</p>
      </div>
      <div>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={img2} alt="Imagen 2" />
        </a>
        <p className="legend">Portafolio</p>
      </div>
      <div>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={img3} alt="Imagen 3" />
        </a>
        <p className="legend">Tienda de digital</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponentProyecto;
