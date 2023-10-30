import { PersonParams } from '../components/Search/Search.type';
import {
  Person,
  setPeople,
  setShowAuthSpinner,
} from '../components/StartWarsApp/StartWarsApp.types';
import request from './request';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

type People = {
  results: Person[];
};

function isPersonParams(
  params: PersonParams
): params is { [key: string]: PersonParams } {
  return typeof params === 'object' && params !== null;
}

export const getPeople = (
  params: PersonParams = {},
  setPeople: setPeople,
  setShowAuthSpinner: setShowAuthSpinner
) => {
  let url = `${apiUrl}/people`;

  let query = '?';
  if (isPersonParams(params)) {
    for (const key in params) {
      query += `${key}=${params[key]}&`;
    }
  }

  if (query !== '?') {
    url += query;
  }

  request<People>(url, 'GET')
    .then((people: People) => {
      setPeople(people.results);
    })
    .then(() => {
      setShowAuthSpinner(false);
    })
    .catch((err) => {
      console.log('error:', err);
    });
};
