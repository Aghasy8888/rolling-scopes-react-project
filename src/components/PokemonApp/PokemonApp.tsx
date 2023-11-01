import React from 'react';
import { useState } from 'react';
import { Berries, Search } from '..';
import { PokemonAppState, setShowAuthSpinner } from './PokemonApp.types';
import usePokemonEffects from '../../hooks/usePokemonEffects';

import styles from './PokemonAppStyle.module.scss';

type PokemonAppProps = {
  setShowAuthSpinner: setShowAuthSpinner;
};

function PokemonApp(props: PokemonAppProps) {
  const [state, setState] = useState<PokemonAppState>({
    berries: [],
    searchValue: localStorage.getItem('search')
      ? localStorage.getItem('search')
      : '',
    hasError: false,
  });

  const setBerries = (newBerries: PokemonAppState['berries']) => {
    setState({
      ...state,
      berries: newBerries,
    });
  };

  const setSearch = (newSearchValue: PokemonAppState['searchValue']) => {
    setState({
      ...state,
      searchValue: newSearchValue,
    });
  };

  const throwAnError = () => {
    setState({
      ...state,
      hasError: true,
    });
  };

  usePokemonEffects(props.setShowAuthSpinner, setBerries, state);

  const { berries, searchValue } = state;

  return (
    <div className={styles.starWarsApp}>
      <h1 className={styles.logo}>
        Poke<span>mon</span>
      </h1>
      <Search
        searchValue={searchValue}
        setBerries={setBerries}
        setSearch={setSearch}
        setShowAuthSpinner={props.setShowAuthSpinner}
      />
      <main>
        <Berries berries={berries} />
      </main>
      <button className={styles.testErrorBounderyBtn} onClick={throwAnError}>
        Test Error Boundery
      </button>
    </div>
  );
}

export default PokemonApp;
