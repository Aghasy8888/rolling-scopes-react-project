import {
  setPeople,
  setShowAuthSpinner,
} from '../StartWarsApp/StartWarsApp.types';

export type SearchState = {
  windowWidth: number;
};

export type SearchProps = {
  setPeople: setPeople;
  setSearch: (search: string) => void;
  searchValue: string | null;
  setShowAuthSpinner: setShowAuthSpinner;
};

export type PersonParams = {
  search?: string | null;
};
