import {
  setBerries,
  setShowAuthSpinner,
} from '../PokemonApp/PokemonApp.types';

export type SearchProps = {
  setBerries: setBerries;
  setSearch: (search: string) => void;
  searchValue: string | null;
  setShowAuthSpinner: setShowAuthSpinner;
};

export type BerryParams = {
  limit: string;
  offset: string;
  [key: string]: string;
};
