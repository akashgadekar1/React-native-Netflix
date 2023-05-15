import {doGetMusicMovieAPI} from '../../Api/MusicMovie';
import {call, put, takeLatest} from 'redux-saga/effects';

import {GetMusicMovieError, GetMusicMovieSuccess} from './action';
import {GET_MUSIC_MOVIE} from './actionTypes';

function* getMusicMovieDetailsAsync() {
  try {
    const result = yield call(doGetMusicMovieAPI);
    if (result) {
      // console.log('DD::', result.data.results);
      yield put(GetMusicMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetMusicMovieError(error));
  }
}

export function* watchGetMusicMovieAsync() {
  yield takeLatest(GET_MUSIC_MOVIE, getMusicMovieDetailsAsync);
}
