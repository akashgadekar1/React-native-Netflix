import {call, put, takeLatest} from 'redux-saga/effects';

import {GetCastDetailsError, GetCastDetailsSuccess} from './action';
import {GET_CAST_DETAILS} from './actionTypes';
import {doGetCastAPI} from '../../Api/CastCredit';

function* getCastDetailsAsync(action) {
  try {
    const result = yield call(doGetCastAPI, action.id);
    // console.log('res::', result.data);
    if (result) {
      yield put(GetCastDetailsSuccess(result.data.cast));
    }
  } catch (error) {
    console.log({error});
    yield put(GetCastDetailsError(error));
  }
}

export function* watchGetCastDetailsAsync() {
  yield takeLatest(GET_CAST_DETAILS, getCastDetailsAsync);
}
