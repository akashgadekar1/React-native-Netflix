import {GET_TRENDING_WEEK_MOVIE} from './actionTypes';
import {call, put, takeLatest} from 'redux-saga/effects';

const {doGetTrendingWeekApi} = require('../../Api/TrendingWeek');
const {GetMovieWeekSuccess, GetMovieWeekError} = require('./action');

function* getTrendingasync() {
  try {
    const result = yield call(doGetTrendingWeekApi);
    // console.log(result);
    if (result) {
      yield put(GetMovieWeekSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetMovieWeekError(error));
  }
}

export function* watchGetMovieWeekAsync() {
  yield takeLatest(GET_TRENDING_WEEK_MOVIE, getTrendingasync);
}
