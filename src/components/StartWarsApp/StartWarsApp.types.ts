export type Person = {
  name: string;
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type StarWarsAppState = {
  people: Person[];
  searchValue: string | null;
  hasError: boolean;
};

export type setShowAuthSpinner = (showAuthSpinner: boolean) => void;

export type setPeople = (people: Person[]) => void;
