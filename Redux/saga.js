import {watchGetMovieAsync} from './TrendingDay/saga';
import {all, fork} from 'redux-saga/effects';
import {watchGetMovieWeekAsync} from './TrendingWeek/saga';

export function* rootSaga() {
  yield all([fork(watchGetMovieAsync), fork(watchGetMovieWeekAsync)]);
}
