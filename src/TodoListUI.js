import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

export default class TodoListUI extends Component {
  render() {
    return (
      <div style={{marginTop: '10px'}}>
        <Input value={this.props.inputValue} 
               placeholder="输入框" 
               style={{width:'300px',marginLeft: '10px'}} 
               onChange={this.props.handleInputChange}
               />
        <Button type="primary" onClick={this.props.handleBtnClick} style={{marginLeft: '10px'}}>Primary</Button>

        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {this.props.handleItemClick(index)}}>{item}</List.Item>
          )}
          
          style={{marginTop: '30px',width:'300px',marginLeft: '10px'}}
        />
      </div>
    )
  }
}
