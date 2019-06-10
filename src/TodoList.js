import React from 'react';
import { connect } from 'react-redux';
import { inputChangeAction, addItemAction, deleteItemAction } from './store/actionCreators';

// 组件只有render 渲染功能。可以改成UI组件
const TodoList = (props) => {
  const {inputValue, list, changeInputValue, handleBtnClick, handleItemDelete} = props;
  
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={() => {handleItemDelete(index)}}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}
/** 
 * 把store里的state映射到组件的props
*/
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
/**
 * 把 store.dispatch 挂载到
 */
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      dispatch(inputChangeAction(e.target.value))
    },
    handleBtnClick() {
      dispatch(addItemAction());
    },
    handleItemDelete(index) {
      dispatch(deleteItemAction(index))
    }
  }
}

/** 
 * todolist 与 store 做连接
 * UI组件与一些数据、逻辑相结合成容器组件。
*/
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)