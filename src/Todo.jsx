import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.todoItem.description,
            priority: props.todoItem.priority,
            isEditing: false
        }
        this.toggleEditing = this.toggleEditing.bind(this);
        this.smallChangeHandler = this.smallChangeHandler.bind(this);
        this.saveAndClose = this.saveAndClose.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    priorityFunc(index) {
            var color = 'list-group-item list-group-item-success success';
            if (this.state.priority == '2') { color = 'list-group-item list-group-item-warning success' }
            else if (this.state.priority == '1') { color = 'list-group-item list-group-item-danger success' }
            return color;
    }
    smallChangeHandler(e){
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    toggleEditing() {
        this.setState({isEditing: !this.state.isEditing});
    }
    saveAndClose(){
        this.setState({
            isEditing: false
        },()=>this.props.bigStateEdit(this.props.index, this.state));
    }
    deleteHandler(){
        this.props.bigStateDeleter(this.props.index)
    }
    
    
    



    render() {
        const {description, priority, isEditing } = this.state;
        const {index, todoItem, bigStateEdit} = this.props;
        return <li className={this.priorityFunc(index)}>
        {
            (!isEditing) ?

                <div>
                    <input type='checkbox' />
                    <span className='todoDescription font-weight-bold'>{description}</span>
                    <a className='delete-todo glyphicon glyphicon-trash pull-right ml-4' onClick={this.deleteHandler}></a>
                    <a className='edit-todo glyphicon glyphicon-edit pull-right' onClick={this.toggleEditing}></a>
                </div>

                :

                <form className='todoEditor'>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea name='description' className='update-todo-text form-control' rows='4' onChange={this.smallChangeHandler} defaultValue='Edit your Todo item'>
                    </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Priority</label>
                        <select name='priority' className='update-todo-priority form-control col-5' onChange={this.smallChangeHandler}>
                            <option value='Select a priority' disabled selected>Select a priority</option>
                            <option value='1'>High Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>Low Priority</option>
                        </select>
                    </div>
                    <div className='form-group d-flex align-items-end flex-column'>
                        <a className='update-todo btn btn-lg btn-success text-white' onClick={this.saveAndClose}>Save</a>
                    </div>
                </form>
        }
    </li>
    }
}