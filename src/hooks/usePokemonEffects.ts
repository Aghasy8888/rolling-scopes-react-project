import { useEffect } from 'react';
import { getBerries } from '../helpers/getBerries';
import {
  PokemonAppState,
  setShowAuthSpinner,
} from '../components/PokemonApp/PokemonApp.types';

export default function usePokemonEffects(
  setShowAuthSpinner: setShowAuthSpinner,
  setBerries: (newBerries: PokemonAppState['berries']) => void,
  state: PokemonAppState
) {
  useEffect(() => {
    setShowAuthSpinner(true);
    getBerries(setBerries, setShowAuthSpinner, state.searchValue?.trim());
  }, []);

  useEffect(() => {
    const { hasError } = state;
    if (hasError) {
      throw new Error();
    }
  }, [state]);
}
