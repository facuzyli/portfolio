import React from 'react';
import dataES from '../i18n/es.json';
import dataEN from '../i18n/en.json';
import './ContactoPage.css';
import BackButton from '../components/BackButton';

const ContactoPage = ({ language }) => {
  const data = language === 'es' ? dataES : dataEN;

  return (
    
    <div className="contact-container">
      <BackButton/>
      <h1>Contacto</h1>
      {data.CONTACT.map((contact, index) => (
        <div key={index} className="contact-item">
          
          <a href={contact.LINK} target="_blank" rel="noopener noreferrer">
          <img src={contact.img} alt={contact.TITLE} />
            
          </a>
        </div>
      ))}
    </div>    
    
  );
};

export default ContactoPage;