import {
  GET_ANIMATION_MOVIE,
  GET_ANIMATION_MOVIE_ERROR,
  GET_ANIMATION_MOVIE_SUCCESS,
} from './actionTypes';

export const GetAnimationMovie = () => {
  return {
    type: GET_ANIMATION_MOVIE,
  };
};

export const GetAnimationMovieSuccess = respdata => {
  return {
    type: GET_ANIMATION_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetAnimationMovieError = errordata => {
  return {
    type: GET_ANIMATION_MOVIE_ERROR,
    payload: errordata,
  };
};
