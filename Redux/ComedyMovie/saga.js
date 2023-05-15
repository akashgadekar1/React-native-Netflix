import {call, put, takeLatest} from 'redux-saga/effects';

import {doGetComedyMovieAPI} from '../../Api/ComedyMovie';
import {GetComedyMovieError, GetComedyMovieSuccess} from './action';
import {GET_COMEDY_MOVIE} from './actionTypes';

function* getComedyMovieDetailsAsync() {
  try {
    const result = yield call(doGetComedyMovieAPI);
    if (result) {
      // console.log('DD::', result.data.results);
      yield put(GetComedyMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetComedyMovieError(error));
  }
}

export function* watchGetComedyMovieAsync() {
  yield takeLatest(GET_COMEDY_MOVIE, getComedyMovieDetailsAsync);
}
