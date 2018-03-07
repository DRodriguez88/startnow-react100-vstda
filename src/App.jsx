import React, { Component } from 'react';
import InputsCompo from './InputsCompo';
import OutputsCompo from './OutputsCompo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todoList: []
    }
    this.bigStateUpdater = this.bigStateUpdater.bind(this);
  }

  bigStateUpdater (inputData) {
    this.setState({
      todoList: this.state.todoList.concat(inputData)
    }, ()=>console.log(this.state));
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
          {<OutputsCompo />}
        </div>
      </div>
    )
  }
}