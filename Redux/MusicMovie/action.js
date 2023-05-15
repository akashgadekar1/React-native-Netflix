import {
  GET_MUSIC_MOVIE,
  GET_MUSIC_MOVIE_ERROR,
  GET_MUSIC_MOVIE_SUCCESS,
} from './actionTypes';

export const GetMusicMovie = () => {
  return {
    type: GET_MUSIC_MOVIE,
  };
};

export const GetMusicMovieSuccess = respdata => {
  return {
    type: GET_MUSIC_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetMusicMovieError = errordata => {
  return {
    type: GET_MUSIC_MOVIE_ERROR,
    payload: errordata,
  };
};
