import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Si necesitas estilos adicionales

import img1 from './assets/c1.jpg';
import img2 from './assets/c2.jpg';
import img3 from './assets/c3.jpg';
import img4 from './assets/c4.jpg';
import img5 from './assets/c5.jpg';


const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={img1} alt="Imagen 1" />
     </div>
      <div>
        <img src={img2} alt="Imagen 2" />
      </div>
      <div>
        <img src={img3} alt="Imagen 3" />
      </div>
      <div>
        <img src={img4} alt="Imagen 4" />
      </div>
      <div>
        <img src={img5} alt="Imagen 5" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
