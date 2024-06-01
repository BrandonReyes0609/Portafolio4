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
        <img src={img1} alt="Imagen 1" />
        <p className="legend">Leyenda 1</p>
      </div>
      <div>
        <img src={img2} alt="Imagen 2" />
        <p className="legend">Leyenda 2</p>
      </div>
      <div>
        <img src={img3} alt="Imagen 3" />
        <p className="legend">Leyenda 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponentProyecto;
