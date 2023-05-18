import {call, put, takeLatest} from 'redux-saga/effects';
import {doGetSearchMovieAPI} from '../../Api/SearchMovieApi';

import {GetSearchMovieError, GetSearchMovieSuccess} from './action';
import {GET_SEARCH_MOVIE} from './actionTypes';

function* getSearchAsync(action) {
  try {
    const result = yield call(doGetSearchMovieAPI, action.name);
    if (result) {
      yield put(GetSearchMovieSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetSearchMovieError(error));
  }
}
export function* watchGetSearchAsync() {
  yield takeLatest(GET_SEARCH_MOVIE, getSearchAsync);
}
