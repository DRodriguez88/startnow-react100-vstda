import React, { Component } from 'react';
import InputsCompo from './InputsCompo';

class App extends Component {

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
      </div>
    );
  }
}


export default App;
