import {
  GET_CAST_DETAILS,
  GET_CAST_DETAILS_ERROR,
  GET_CAST_DETAILS_SUCCESS,
} from './actionTypes';

export const GetCastDetails = id => {
  return {
    type: GET_CAST_DETAILS,
    id,
  };
};

export const GetCastDetailsSuccess = respdata => {
  return {
    type: GET_CAST_DETAILS_SUCCESS,
    payload: respdata,
  };
};
export const GetCastDetailsError = errordata => {
  return {
    type: GET_CAST_DETAILS_ERROR,
    payload: errordata,
  };
};
