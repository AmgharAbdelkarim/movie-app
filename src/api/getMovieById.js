import axios from 'axios';

export default function getMovieByIdApi(id) {
  const url = 'http://www.omdbapi.com/?apikey=9ddde0b3&i=' + id;
  return axios.get(url);
}
