import {
  GET_TRENDING_WEEK_MOVIE,
  GET_TRENDING_WEEK_MOVIE_SUCCESS,
} from './actionTypes';

const initalstate = {
  respdata: null,
  errordata: null,
  loading: null,
};

export function TrendingWeekReducer(state = initalstate, action) {
  switch (action.type) {
    case GET_TRENDING_WEEK_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_WEEK_MOVIE_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: true,
      };

    default:
      return state;
  }
}
