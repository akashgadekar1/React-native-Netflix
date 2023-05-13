import {
  GET_MOVIE_DETAILS_RECOMMEND,
  GET_MOVIE_DETAILS_RECOMMEND_ERROR,
  GET_MOVIE_DETAILS_RECOMMEND_SUCCESS,
} from './actionTypes';

export const GetMovieDetailsRecommend = id => {
  return {
    type: GET_MOVIE_DETAILS_RECOMMEND,
    id,
  };
};

export const GetMovieDetailsRecommendSuccess = respdata => {
  return {
    type: GET_MOVIE_DETAILS_RECOMMEND_SUCCESS,
    payload: respdata,
  };
};

export const GetMovieDetailsRecommendError = errordata => {
  return {
    type: GET_MOVIE_DETAILS_RECOMMEND_ERROR,
    payload: errordata,
  };
};
