import {
  GET_POST_DETAILS,
  GET_POST_DETAILS_ERROR,
  GET_POST_DETAILS_SUCCESS,
} from './actionTypes';

const initialState = {
  respData: null,
  errorData: null,
  loading: true,
  id: null,
};

export function DetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_DETAILS:
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    case GET_POST_DETAILS_SUCCESS:
      return {
        ...state,
        respData: action.payload,
        loading: false,
      };
    case GET_POST_DETAILS_ERROR:
      return {
        ...state,
        errorData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
