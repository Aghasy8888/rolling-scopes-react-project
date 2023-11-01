type nameUrl = {
  name: string;
  url: string;
};

export type Berry = {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: nameUrl;
  potency: number;
  flavors: nameUrl[];
  item: nameUrl;
  natural_gift_type: nameUrl;
};

export type PokemonAppState = {
  berries: Berry[];
  searchValue: string | null;
  hasError: boolean;
};

export type setShowAuthSpinner = (showAuthSpinner: boolean) => void;

export type setBerries = (berries: Berry[]) => void;
