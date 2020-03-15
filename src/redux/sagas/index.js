import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getFromApi } from '../../service/api';
import {
  ASYNC_GET_BREEDS,
  ASYNC_GET_CATS,
  FAILURE_GET_BREEDS,
  FAILURE_GET_CATS,
  SUCCESS_GET_BREEDS,
  SUCCESS_GET_CATS,
} from '../actions/actionTypes';

function* getBreeds() {
  try {
    const response = yield call(getFromApi, '/breeds');

    yield put({
      type: SUCCESS_GET_BREEDS,
      payload: {
        breeds: response.data,
      },
    });
  } catch (err) {
    yield put({ type: FAILURE_GET_BREEDS });
  }
}

function* getCatsByBreed(action) {
  try {
    const response = yield call(
      getFromApi,
      `/images/search?breed_id=${action.payload.breed}&limit=20`
    );

    yield put({
      type: SUCCESS_GET_CATS,
      payload: {
        cats: response.data,
      },
    });
  } catch (err) {
    yield put({
      type: FAILURE_GET_CATS,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ASYNC_GET_BREEDS, getBreeds),
    takeLatest(ASYNC_GET_CATS, getCatsByBreed),
  ]);
}
