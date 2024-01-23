import React from 'react';
import Header from '../src/app/components/Header';
import ExternalData from '../src/app/components/ExternalData'; // Importera ExternalData

const NewIndex = () => {
  return (
    <div>
      <Header />
      <h1>Ny Index-sida</h1>

      <ExternalData /> {/* Använd ExternalData-komponenten här */}
    </div>
  );
}

export default NewIndex;
