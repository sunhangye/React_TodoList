import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// 之前action返回的是一个对象，此时使用redux中间件 redux-thunk  返回的是一个函数，这样可以进行异步操作
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const action = initListAction(res.data);
      dispatch(action);
    })
  }
}


