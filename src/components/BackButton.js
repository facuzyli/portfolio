import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';  // Estilos para el botón
import backButtonImage from '/assets/img/back.png';

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      <img src={backButtonImage} alt="Volver" />
    </Link>
  );
};

export default BackButton;