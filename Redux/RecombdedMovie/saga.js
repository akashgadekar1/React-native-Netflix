import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_MOVIE_DETAILS_RECOMMEND} from './actionTypes';
import {doGetRecommendedApi} from '../../Api/Recommended';

const {
  GetMovieDetailsRecommendSuccess,
  GetMovieDetailsRecommendError,
} = require('./action');

function* getMovieRecommendasync(action) {
  try {
    const result = yield call(doGetRecommendedApi, action.id);
    console.log({result});
    if (result) {
      yield put(GetMovieDetailsRecommendSuccess(result.data.results));
    }
  } catch (error) {
    yield put(GetMovieDetailsRecommendError(error));
  }
}
export function* watchGetMovieRecommendAsync() {
  yield takeLatest(GET_MOVIE_DETAILS_RECOMMEND, getMovieRecommendasync);
}
