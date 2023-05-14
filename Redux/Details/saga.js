import {call, put, takeLatest} from 'redux-saga/effects';

import {getPostDetailsError, getPostDetailsSuccess} from './action';
import {GET_POST_DETAILS} from './actionTypes';
import {doGetDetailsAPI} from '../../Api/DetailsApi';

function* getDetailsAsync(action) {
  try {
    const result = yield call(doGetDetailsAPI, action.id);
    // console.log('in saga', result.data);
    if (result) {
      yield put(getPostDetailsSuccess(result.data));
    }
  } catch (error) {
    yield put(getPostDetailsError(error));
  }
}

export function* watchGetDetailsAsync() {
  yield takeLatest(GET_POST_DETAILS, getDetailsAsync);
}
