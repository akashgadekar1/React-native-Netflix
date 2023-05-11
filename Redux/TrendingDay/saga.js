import {doGetMovieApi} from '../../Api/Trendingday';
import {GET_MOVIE_DETAILS} from './ActionTypes';
import {GetMovieDetailsError, GetMovieDetailsSuccess} from './action';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getMovieasync() {
  try {
    const result = yield call(doGetMovieApi);
    console.log(result);
    if (result) {
      yield put(GetMovieDetailsSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetMovieDetailsError(error));
  }
}
export function* watchGetMovieAsync() {
  yield takeLatest(GET_MOVIE_DETAILS, getMovieasync);
}
