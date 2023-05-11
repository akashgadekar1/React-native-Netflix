import {
  GET_TRENDING_WEEK_MOVIE,
  GET_TRENDING_WEEK_MOVIE_ERROR,
  GET_TRENDING_WEEK_MOVIE_SUCCESS,
} from './actionTypes';

export const GetMovieWeek = () => {
  return {
    type: GET_TRENDING_WEEK_MOVIE,
  };
};

export const GetMovieWeekSuccess = respdata => {
  return {
    type: GET_TRENDING_WEEK_MOVIE_SUCCESS,
    payload: respdata,
  };
};

export const GetMovieWeekError = errordata => {
  return {
    type: GET_TRENDING_WEEK_MOVIE_ERROR,
    payload: errordata,
  };
};
