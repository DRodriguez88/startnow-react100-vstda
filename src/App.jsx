import React, { Component } from 'react';
import InputsCompo from './InputsCompo';
import OutputsCompo from './OutputsCompo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        description : [],
        priority : '',
        editEnabled : false
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='p-4'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='text-white'>Track all of the things</p>
          <hr className='border-white'/>
        </div>
        <div className='inputsCompo'>
          {<InputsCompo />}
        </div>
        <div className='outputsCompo'>
          {<OutputsCompo />}
        </div>
      </div>
    );
  }
}


export default App;
