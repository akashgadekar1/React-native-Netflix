import {
  GET_CAST_DETAILS,
  GET_CAST_DETAILS_ERROR,
  GET_CAST_DETAILS_SUCCESS,
} from './actionTypes';

const initialState = {
  respData: null,
  errorData: null,
  loading: true,
  id: null,
};

export function CastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAST_DETAILS:
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    case GET_CAST_DETAILS_SUCCESS:
      return {
        ...state,
        respdata: action.payload,
        loading: false,
      };
    case GET_CAST_DETAILS_ERROR:
      return {
        ...state,
        errordata: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
