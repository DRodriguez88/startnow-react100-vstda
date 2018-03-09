import React, { Component } from 'react';
import InputsCompo from './InputsCompo';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todoList: [
        ]
    }
    this.bigStateUpdater = this.bigStateUpdater.bind(this);
    this.bigStateEdit = this.bigStateEdit.bind(this);
    this.bigStateDeleter = this.bigStateDeleter.bind(this);
  }

  bigStateUpdater(inputData) {
    this.setState({
      todoList: this.state.todoList.concat(inputData)
    });
  }

  bigStateEdit(index, state) {
    const todoListCopy = [...this.state.todoList]
    todoListCopy[index] = state

    this.setState({
      todoList: todoListCopy
    })
  }

  bigStateDeleter(index){
    const todoListCopy = [...this.state.todoList];
    todoListCopy.splice(index, 1);

    this.setState({
      todoList: todoListCopy
    })
  }



  render(){
    return(
      <div className='container'>
        <div className='p-4'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='text-white'>Track all of the things</p>
          <hr className='border-white'/>
        </div>
        <div className='inputsCompo'>
          {<InputsCompo bigStateUpdater={this.bigStateUpdater}/>}
        </div>
        <div className='outputsCompo'>
          {<TodoList todoList={this.state.todoList} bigStateEdit={this.bigStateEdit} bigStateDeleter={this.bigStateDeleter}/>}
        </div>
      </div>
    )
  }
}