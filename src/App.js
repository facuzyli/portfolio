import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EstudiosPage from './pages/EstudiosPage';
import ContactoPage from './pages/ContactoPage';
import TrabajoPage from './pages/TrabajoPage';
import SobreMiPage from './pages/SobreMiPage';
// Importa los otros componentes de páginas aquí

function App() {
  const [language, setLanguage] = useState('es'); // 'es' es el valor predeterminado

  // Función para cambiar el lenguaje
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      {/* Seleccionador de Lenguaje */}
      <div className="language-selector">
        <button onClick={() => handleLanguageChange('es')}>ES</button>
        <button onClick={() => handleLanguageChange('en')}>EN</button>
      </div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/estudios" element={<EstudiosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/sobremi" element={<SobreMiPage />} />
      <Route path="/trabajo" element={<TrabajoPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;