import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EstudiosPage from './pages/EstudiosPage';
import ContactoPage from './pages/ContactoPage';
import TrabajoPage from './pages/TrabajoPage';
import SobreMiPage from './pages/SobreMiPage';

function App() {
  const [language, setLanguage] = useState('es');

  return (
    <Router>
      <div className="language-selector">
        <button onClick={() => setLanguage('es')}>ES</button>
        <button onClick={() => setLanguage('en')}>EN</button>
      </div>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/estudios" element={<EstudiosPage language={language} />} />
        <Route path="/contacto" element={<ContactoPage language={language} />} />
        <Route path="/sobremi" element={<SobreMiPage language={language} />} />
        <Route path="/trabajo" element={<TrabajoPage language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;