import React from 'react';
import Slider from "react-slick";
import data from '../i18n/es.json';
import BackButton from '../components/BackButton';

const TrabajoPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
    <BackButton />
      <Slider {...settings}>
        {data.TRABAJOS.map((trabajo, index) => (
          <div key={index}>
            <img src={trabajo.imagen} alt={trabajo.titulo} />
            <h2>{trabajo.titulo}</h2>
            <p>{trabajo.parrafo1}</p>
            <p>{trabajo.parrafo2}</p>
            <p>{trabajo.parrafo3}</p>
            <p>{trabajo.fecha}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrabajoPage;