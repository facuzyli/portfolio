import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Importa los otros componentes de páginas aquí

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage} />
        {/* Configura las rutas para las otras páginas aquí */}
      </Routes>
    </Router>
  );
}

export default App;