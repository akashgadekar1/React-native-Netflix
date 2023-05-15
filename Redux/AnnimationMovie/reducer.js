import {
  GET_ANIMATION_MOVIE,
  GET_ANIMATION_MOVIE_ERROR,
  GET_ANIMATION_MOVIE_SUCCESS,
} from './actionTypes';

const initialState = {
  respdata: null,
  errordata: null,
  loading: null,
  id: null,
};

export function AnimationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMATION_MOVIE:
      return {
        ...state,
        loading: true,
      };

    case GET_ANIMATION_MOVIE_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_ANIMATION_MOVIE_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
