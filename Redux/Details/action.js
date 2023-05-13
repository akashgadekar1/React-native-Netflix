import {
  GET_POST_DETAILS,
  GET_POST_DETAILS_ERROR,
  GET_POST_DETAILS_SUCCESS,
} from './actionTypes';

export const GetPostDetails = id => {
  return {
    type: GET_POST_DETAILS,
    id,
  };
};

export const getPostDetailsSuccess = respData => {
  return {
    type: GET_POST_DETAILS_SUCCESS,
    payload: respData,
  };
};
export const getPostDetailsError = errorData => {
  return {
    type: GET_POST_DETAILS_ERROR,
    payload: errorData,
  };
};
