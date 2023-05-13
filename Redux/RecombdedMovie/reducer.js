import {
  GET_MOVIE_DETAILS_RECOMMEND,
  GET_MOVIE_DETAILS_RECOMMEND_ERROR,
  GET_MOVIE_DETAILS_RECOMMEND_SUCCESS,
} from './actionTypes';

const initalstate = {
  respdata: null,
  errordata: null,
  id: null,
  loading: true,
};

export function RecommendReducer(state = initalstate, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS_RECOMMEND:
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    case GET_MOVIE_DETAILS_RECOMMEND_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_MOVIE_DETAILS_RECOMMEND_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
