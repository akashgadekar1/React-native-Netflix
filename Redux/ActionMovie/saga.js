import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_ACTION_MOVIE} from './actionTypes';
import {GetActionMovieSuccess, GetActionMovieError} from './action';
import {doGetActionMovieAPI} from '../../Api/ActionMovie';
function* getActionMovieDetailsAsync() {
  try {
    const result = yield call(doGetActionMovieAPI);
    if (result) {
      // console.log('DD::', result.data.results);
      yield put(GetActionMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetActionMovieError(error));
  }
}

export function* watchGetActionMovieAsync() {
  yield takeLatest(GET_ACTION_MOVIE, getActionMovieDetailsAsync);
}
