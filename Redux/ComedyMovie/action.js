import {
  GET_COMEDY_MOVIE,
  GET_COMEDY_MOVIE_ERROR,
  GET_COMEDY_MOVIE_SUCCESS,
} from './actionTypes';

export const GetComedyMovie = () => {
  return {
    type: GET_COMEDY_MOVIE,
  };
};

export const GetComedyMovieSuccess = respdata => {
  return {
    type: GET_COMEDY_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetComedyMovieError = errordata => {
  return {
    type: GET_COMEDY_MOVIE_ERROR,
    payload: errordata,
  };
};
