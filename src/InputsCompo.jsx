import React, { Component } from 'react';

export default class InputsCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            description: '',
            priority: '0',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
      }
    
      handleClick(){
          if (this.state.priority < 1 || this.state.description.length < 1){alert('Please complete both fields');return}
          else{
        var newTodoObj = {
            description : this.state.description,
            priority : this.state.priority
        };
        this.setState({
            todos: this.state.todos.concat(newTodoObj)
        },this.props.bigStateUpdater(this.state))}
      }    
    
    
    
    render(){
        return(
            <div className='col-sm-3'>    
                <div className='card'>
                    <div className='card-header'>Add new Todo</div>
                    <div className='card-body'>
                        <p className='font-weight-bold'>I want to..</p>
                        <textarea name='description' className='create-todo-text' onChange={this.handleChange}></textarea>
                        <p className='font-weight-bold'>How much of a priority is this?</p>
                        <select name='priority' className='create-todo-priority' type='number' onChange={this.handleChange}>
                            <option disabled selected>
                                Choose a priority
                            </option>                
                            <option value='1'>
                                High priority
                            </option>
                            <option value='2'>
                                Medium priority
                            </option>
                            <option value='3'>
                                Low priority
                            </option>
                        </select>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success btn-block' onClick={this.handleClick}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
        
    

