import {watchGetMovieAsync} from './TrendingDay/saga';
import {all, fork} from 'redux-saga/effects';
import {watchGetMovieWeekAsync} from './TrendingWeek/saga';
import {watchGetMovieRecommendAsync} from './RecombdedMovie/saga';

export function* rootSaga() {
  yield all([
    fork(watchGetMovieAsync),
    fork(watchGetMovieWeekAsync),
    fork(watchGetMovieRecommendAsync),
  ]);
}
