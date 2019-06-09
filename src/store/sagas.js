import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreator'

function* getInitTodoList() {
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (error) {
    console.log('list.json请求失败');
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitTodoList);
}

export default mySaga;