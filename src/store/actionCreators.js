import { INIT_LIST_ACTION, ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from './actionTypes';

export const inputChangeAction = (value) => ({
  type: INIT_LIST_ACTION,
  value
})

export const addItemAction = (item) => ({
  type: ADD_ITEM_ACTION,
  item
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM_ACTION,
  index
})

