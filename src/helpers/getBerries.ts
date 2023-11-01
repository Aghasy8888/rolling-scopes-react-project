import { BerryParams } from '../components/Search/Search.type';
import {
  Berry,
  setBerries,
  setShowAuthSpinner,
} from '../components/PokemonApp/PokemonApp.types';
import request from './request';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

type Berries = {
  results: Berry[];
};

export const getBerries = (
  setBerries: setBerries,
  setShowAuthSpinner: setShowAuthSpinner,
  searchValue: string | undefined
) => {
  const paginationData: BerryParams = {
    limit: '10',
    offset: '10',
  };

  let url = `${apiUrl}/${searchValue ? searchValue : ''}`;
  console.log('url', url);

  let query = '?';

  for (const key in paginationData) {
    query += `${key}=${paginationData[key]}&`;
  }

  if (query !== '?') {
    url += query;
  }

  request<Berries | Berry>(url, 'GET')
    .then((berries: Berries | Berry) => {
      console.log('berries', berries);
      let berriesArray: Berry[];

      if (searchValue) {
        if (Array.isArray(berries)) {
          berriesArray = berries as Berry[];
        } else {
          berriesArray = [berries as Berry];
        }
      } else {
        if ('results' in berries) {
          berriesArray = berries.results as Berry[];
        } else {
          berriesArray = [berries as Berry];
        }
      }

      setBerries(berriesArray);
    })
    .then(() => {
      setShowAuthSpinner(false);
    })
    .catch((err) => {
      setShowAuthSpinner(false);
      console.log('error:', err);
    });
};
