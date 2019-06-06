import React, { Component } from 'react'
import store from './store';

import { getInputChangeAction, getItemAction, getDeleteItemAction } from './store/actionCreator';
import TodoListUI from './TodoListUI'
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.inputChangeHandle = this.inputChangeHandle.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  inputChangeHandle(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getItemAction()
    store.dispatch(action);
  }
  handleItemClick(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    
    return (
      <TodoListUI inputValue={this.state.inputValue}
                  handleInputChange={this.inputChangeHandle}
                  handleBtnClick={this.handleBtnClick}
                  list={this.state.list}
                  handleItemClick={this.handleItemClick}

      />
    )
  }
}
