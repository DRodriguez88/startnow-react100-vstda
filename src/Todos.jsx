import React, { Component } from 'react';

export default class Todos extends Component {
    constructor(props) {
        super(props);
      }

    renderList(){
        return(
            this.props.todoList.map((todoItem, index) => 
                <li className='list-group-item list-group-item-success' key={index}>
                    <input type='checkbox' />
                    <span className='todoDescription font-weight-bold'>{todoItem.description}</span>
                    <a className='delete-todo glyphicon glyphicon-trash pull-right ml-4'></a>
                    <a className='edit-todo glyphicon glyphicon-edit pull-right'></a>
                </li>

            )
        )
    }

    render(){
        return(
    <ul className='list-group mr-4'>
        {this.renderList()}     
    </ul>
        )
    }
}

    // <li className='list-group-item list-group-item-light text-dark'>View Todos</li>
    //     <li className='list-group-item list-group-item-danger'>
    //         <input type='checkbox' />
    //         <span className='todoDescription font-weight-bold'>This mock-todo is high priority</span>
    //         <a className="delete-todo glyphicon glyphicon-trash pull-right ml-4"></a>
    //         <a className="edit-todo glyphicon glyphicon-edit pull-right"></a>
    //     </li>
    //     <li className='list-group-item list-group-item-success'>
    //         <input type='checkbox' />
    //         <span className='todoDescription font-weight-bold'>This mock-todo is low priority</span>
    //         <a className="delete-todo glyphicon glyphicon-trash pull-right ml-4"></a>
    //         <a className="edit-todo glyphicon glyphicon-edit pull-right"></a>
    //     </li> 


        // <li className='list-group-item list-group-item-success'>
        //     <form className='todoEditor'>
        //     <div className='form-group'>
        //         <label for='description'>Description</label>
        //         <textarea className='update-todo-text form-control' rows='4'>
        //             Edit your Todo item
        //         </textarea>
        //     </div>
        //     <div className='form-group'>
        //         <label for='priority'>Priority</label>
        //         <select className='update-todo-priority form-control col-5'>
        //             <option value='Select a priority' selected>Select a priority</option>
        //             <option value='1'>High Priority</option>
        //             <option value='2'>Medium Priority</option>
        //             <option value='3'>Low Priority</option>
        //         </select>
        //     </div>
        //     <div className='form-group d-flex align-items-end flex-column'>
        //         <button className='update-todo btn btn-lg btn-success'>Save</button>
        //     </div>
        //     </form>
        // </li>