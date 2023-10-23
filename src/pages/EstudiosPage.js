import React, { useState } from 'react';
import data from '../i18n/es.json';
import BackButton from '../components/BackButton';

const EstudiosPage = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <div>
        <EstudiosPage/>
      <div className="studies-circles">
        {data.ESTUDIOS.map((estudio, index) => (
          <div key={index} className="study-circle" onClick={() => setSelectedStudy(estudio)}>
            <img src={estudio.img} alt={estudio.title} />
          </div>
        ))}
      </div>

      {selectedStudy && (
        <div className="study-details">
          <h2>{selectedStudy.title}</h2>
          <h3>{selectedStudy.subtitle}</h3>
          <p>{selectedStudy.paragraph}</p>
          <p>{selectedStudy.date}</p>
        </div>
      )}
    </div>
  );
};

export default EstudiosPage;