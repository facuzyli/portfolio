import React from 'react';
import data from '../i18n/es.json';
import BackButton from '../components/BackButton';

const SobreMiPage = () => {
  return (
    <div>
        <BackButton/>
      <img src={data.sobremi.IMAGEN} alt="Imagen de perfil" />
      <p dangerouslySetInnerHTML={{ __html: data.sobremi.PARRAFO }} />
    </div>
  );
};

export default SobreMiPage;