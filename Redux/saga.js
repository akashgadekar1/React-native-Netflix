import {watchGetMovieAsync} from './TrendingDay/saga';
import {all, fork} from 'redux-saga/effects';
import {watchGetMovieWeekAsync} from './TrendingWeek/saga';
import {watchGetMovieRecommendAsync} from './RecombdedMovie/saga';
import {watchGetDetailsAsync} from './Details/saga';
import {watchGetCastDetailsAsync} from './CastCredit/saga';
import {watchGetActionMovieAsync} from './ActionMovie/saga';
import {watchGetAnimationMovieAsync} from './AnnimationMovie/saga';
import {watchGetComedyMovieAsync} from './ComedyMovie/saga';
import {watchGetCrimeMovieAsync} from './CrimeMovie/saga';
import {watchGetMusicMovieAsync} from './MusicMovie/saga';

export function* rootSaga() {
  yield all([
    fork(watchGetMovieAsync),
    fork(watchGetMovieWeekAsync),
    fork(watchGetMovieRecommendAsync),
    fork(watchGetDetailsAsync),
    fork(watchGetCastDetailsAsync),
    fork(watchGetActionMovieAsync),
    fork(watchGetAnimationMovieAsync),
    fork(watchGetComedyMovieAsync),
    fork(watchGetCrimeMovieAsync),
    fork(watchGetMusicMovieAsync),
  ]);
}
