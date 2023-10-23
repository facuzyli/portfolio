import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EstudiosPage from './pages/EstudiosPage';
import ContactoPage from './pages/ContactoPage';
import TrabajoPage from './pages/TrabajoPage';
import SobreMiPage from './pages/SobreMiPage';
// Importa los otros componentes de páginas aquí

function App() {
  return (
    <Router>
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