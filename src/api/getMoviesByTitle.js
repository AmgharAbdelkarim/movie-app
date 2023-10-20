import axios from 'axios';

export default function getPokemonApi(title, pageNumber) {
  const url =
    'http://www.omdbapi.com/?apikey=9ddde0b3&type=movie&s=' +
    title +
    '&page=' +
    pageNumber;
  return axios.get(url);
}
