import React from 'react';
import { Link } from 'react-router-dom';
import data from '../i18n/es.json';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">{data.HOME.WELCOME}</h1>
      <p className="home-intro">{data.HOME.INTRO}</p>
      <div className="categories-container">
        <Link to="/trabajo" className="category">{data.MENU.JOB}</Link>
        <Link to="/estudios" className="category">{data.MENU.EDUCATION}</Link>
        <Link to="/sobremi" className="category">{data.MENU.ABOUT_ME}</Link>
        <Link to="/contacto" className="category">{data.MENU.CONTACT}</Link>
        <Link to="/curriculum" className="category">{data.MENU.RESUME}</Link>
      </div>
    </div>
  );
};

export default HomePage;