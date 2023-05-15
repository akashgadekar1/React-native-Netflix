import {
  GET_CRIME_MOVIE,
  GET_CRIME_MOVIE_ERROR,
  GET_CRIME_MOVIE_SUCCESS,
} from './actionTypes';

export const GetCrimeMovie = () => {
  return {
    type: GET_CRIME_MOVIE,
  };
};

export const GetCrimeMovieSuccess = respdata => {
  return {
    type: GET_CRIME_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetCrimeMovieError = errordata => {
  return {
    type: GET_CRIME_MOVIE_ERROR,
    payload: errordata,
  };
};
