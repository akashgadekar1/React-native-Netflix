import {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_ERROR,
  GET_MOVIE_DETAILS_SUCCESS,
} from './ActionTypes';

const initalstate = {
  respdata: null,
  errordata: null,
  loading: true,
};

export function TrendingdayReducer(state = initalstate, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
