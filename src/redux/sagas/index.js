import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getFromApi } from '../../service/api';
import {
  ASYNC_GET_BREEDS,
  SUCCESS_GET_BREEDS,
  FAILURE_GET_BREEDS,
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

export default function* root() {
  yield all([takeLatest(ASYNC_GET_BREEDS, getBreeds)]);
}
