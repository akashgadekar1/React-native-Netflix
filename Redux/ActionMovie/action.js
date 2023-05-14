import {
  GET_ACTION_MOVIE,
  GET_ACTION_MOVIE_ERROR,
  GET_ACTION_MOVIE_SUCCESS,
} from './actionTypes';

export const GetActionMovie = () => {
  return {
    type: GET_ACTION_MOVIE,
  };
};

export const GetActionMovieSuccess = respdata => {
  return {
    type: GET_ACTION_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetActionMovieError = errordata => {
  return {
    type: GET_ACTION_MOVIE_ERROR,
    payload: errordata,
  };
};
