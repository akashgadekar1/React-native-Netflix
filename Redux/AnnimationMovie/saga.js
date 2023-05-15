import {call, put, takeLatest} from 'redux-saga/effects';
import {doGetAnnimationMovieAPI} from '../../Api/AnnimationMovie';
import {GetAnimationMovieError, GetAnimationMovieSuccess} from './action';
import {GET_ANIMATION_MOVIE} from './actionTypes';

function* getAnimationMovieDetailsAsync() {
  try {
    const result = yield call(doGetAnnimationMovieAPI);
    if (result) {
      // console.log('DD::', result.data.results);
      yield put(GetAnimationMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetAnimationMovieError(error));
  }
}

export function* watchGetAnimationMovieAsync() {
  yield takeLatest(GET_ANIMATION_MOVIE, getAnimationMovieDetailsAsync);
}
