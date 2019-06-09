import React from 'react'
import { Input, Button, List } from 'antd';

/**
 * 无状态组件只是一个渲染UI函数，比创建类组件的一些周期节省性能
 */
const TodoListUI = (props) => {
  return (
      <div style={{marginTop: '10px'}}>
        <Input value={props.inputValue} 
               placeholder="输入框" 
               style={{width:'300px',marginLeft: '10px'}} 
               onChange={props.handleInputChange}
               />
        <Button type="primary" onClick={props.handleBtnClick} style={{marginLeft: '10px'}}>Primary</Button>

        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {props.handleItemClick(index)}}>{item}</List.Item>
          )}
          
          style={{marginTop: '30px',width:'300px',marginLeft: '10px'}}
        />
      </div>
    )

}

export default TodoListUI


