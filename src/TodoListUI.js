import React from 'react';

const TodoListUI = (props) => {
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

export default TodoListUI;