import {
  GET_SEARCH_MOVIE,
  GET_SEARCH_MOVIE_ERROR,
  GET_SEARCH_MOVIE_SUCCESS,
} from './actionTypes';

export const GetSearchMovie = name => {
  return {
    name,
    type: GET_SEARCH_MOVIE,
  };
};
export const GetSearchMovieSuccess = respdata => {
  return {
    type: GET_SEARCH_MOVIE_SUCCESS,
    payload: respdata,
  };
};
export const GetSearchMovieError = errordata => {
  return {
    type: GET_SEARCH_MOVIE_ERROR,
    payload: errordata,
  };
};
