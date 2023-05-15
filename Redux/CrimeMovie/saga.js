import {doGetCrimeMovieAPI} from '../../Api/CrimeMovie';
import {call, put, takeLatest} from 'redux-saga/effects';

import {GetCrimeMovieError, GetCrimeMovieSuccess} from './action';
import {GET_CRIME_MOVIE} from './actionTypes';

function* getCrimeMovieDetailsAsync() {
  try {
    const result = yield call(doGetCrimeMovieAPI);
    if (result) {
      // console.log('DD::', result.data.results);
      yield put(GetCrimeMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetCrimeMovieError(error));
  }
}

export function* watchGetCrimeMovieAsync() {
  yield takeLatest(GET_CRIME_MOVIE, getCrimeMovieDetailsAsync);
}
