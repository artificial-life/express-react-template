import {call, put, takeLatest} from 'redux-saga/effects';
import {DONE, LOAD, FAIL} from '../constants/basic.js';
import * as API from '../api/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * fetchRandom(action) {
  try {
    const result = yield call(API.random);
    yield put({type: DONE, value: result.value});
  } catch (e) {
    yield put({type: FAIL, message: e.message});
  }
}

function * mySaga() {
  yield takeLatest(LOAD, fetchRandom);
}

export default mySaga;
