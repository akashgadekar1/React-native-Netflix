import {
  GET_ACTION_MOVIE,
  GET_ACTION_MOVIE_ERROR,
  GET_ACTION_MOVIE_SUCCESS,
} from './actionTypes';

const initialState = {
  respdata: null,
  errordata: null,
  loading: null,
  id: null,
};

export function ActionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTION_MOVIE:
      return {
        ...state,
        loading: true,
      };

    case GET_ACTION_MOVIE_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_ACTION_MOVIE_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
