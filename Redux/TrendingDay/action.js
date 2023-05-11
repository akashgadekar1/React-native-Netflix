import {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_ERROR,
  GET_MOVIE_DETAILS_SUCCESS,
} from './ActionTypes';

export const GetMovieDetails = () => {
  return {
    type: GET_MOVIE_DETAILS,
  };
};

export const GetMovieDetailsSuccess = respdata => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: respdata,
  };
};

export const GetMovieDetailsError = errordata => {
  return {
    type: GET_MOVIE_DETAILS_ERROR,
    payload: errordata,
  };
};
