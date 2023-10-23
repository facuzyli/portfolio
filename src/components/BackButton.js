import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';  // Estilos para el botón

const BackButton = () => {
  return (
    <Link to="/" className="back-button">Volver</Link>
  );
};

export default BackButton;