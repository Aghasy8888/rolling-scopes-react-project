import React from 'react';
import { useState } from 'react';
import { Spinner, PokemonApp } from './components';

function App() {
  const [showAuthSpinner, setShowAuthSpinner] = useState(false);

  return (
    <div>
      <PokemonApp setShowAuthSpinner={setShowAuthSpinner} />
      {showAuthSpinner && <Spinner />}
    </div>
  );
}

export default App;
