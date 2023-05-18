import {
  GET_SEARCH_MOVIE,
  GET_SEARCH_MOVIE_ERROR,
  GET_SEARCH_MOVIE_SUCCESS,
} from './actionTypes';

const initalstate = {
  respdata: null,
  errordata: null,
  loading: true,
  name: null,
};

export function SearchReducer(state = initalstate, action) {
  switch (action.type) {
    case GET_SEARCH_MOVIE:
      return {
        ...state,
        name: action.name,
        loading: true,
      };
    case GET_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_SEARCH_MOVIE_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
