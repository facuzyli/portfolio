import React from 'react';
import { Link } from 'react-router-dom';
import dataES from '../i18n/es.json';
import dataEN from '../i18n/en.json';
import './HomePage.css';

const HomePage = ({ language }) => {
  const data = language === 'es' ? dataES : dataEN;
  const downloadLink = language === 'es' ? dataES.MENU.DOC : dataEN.MENU.DOC;
  const downloadText = language === 'es' ? data.MENU.DESC : 'Resume.pdf';

  return (
    <div className="home-container">
      <h1 className="home-title">{data.HOME.WELCOME}</h1>
      <p className="home-intro">{data.HOME.INTRO}</p>
      <div className="categories-container">
        <Link to="/trabajo" className="category">{data.MENU.JOB}</Link>
        <Link to="/estudios" className="category">{data.MENU.EDUCATION}</Link>
        <Link to="/sobremi" className="category">{data.MENU.ABOUT_ME}</Link>
        <Link to="/contacto" className="category">{data.MENU.CONTACT}</Link>
        <a href={downloadLink} download={downloadText} className="category">{data.MENU.RESUME}</a>
      </div>
    </div>
  );
};

export default HomePage;