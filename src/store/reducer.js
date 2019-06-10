import { INIT_LIST_ACTION, ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from './actionTypes'
const defaultState = {
  inputValue: 'todo',
  list: ['hello', 'sun', 'hangye']
}

export default (state = defaultState, action) => {
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.unshift(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === DELETE_ITEM_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}