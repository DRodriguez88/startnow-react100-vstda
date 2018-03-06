import React from 'react';

export default props => (
    <ul className='list-group mr-4'>
        <li className='list-group-item list-group-item-light text-dark'>View Todos</li>
        <li className='list-group-item list-group-item-danger'>
            <input type='checkbox' />
            <span className='todoDescription font-weight-bold'>This todo is high priority</span>
            <a className="delete-todo glyphicon glyphicon-trash pull-right ml-4"></a>
            <a className="edit-todo glyphicon glyphicon-edit pull-right"></a>
        </li>
        <li className='list-group-item list-group-item-success'>
            <input type='checkbox' />
            <span className='todoDescription font-weight-bold'>This todo is low priority</span>
            <a className="delete-todo glyphicon glyphicon-trash pull-right ml-4"></a>
            <a className="edit-todo glyphicon glyphicon-edit pull-right"></a>
        </li>
        <li className='list-group-item list-group-item-warning'>
            <input type='checkbox' />
            <span className='todoDescription font-weight-bold'>This todo is medium priority</span>
            <a className="delete-todo glyphicon glyphicon-trash pull-right ml-4"></a>
            <a className="edit-todo glyphicon glyphicon-edit pull-right"></a>
        </li>
        <li className='list-group-item list-group-item-success'>
            <form className='todoEditor'>
            <div className='form-group'>
                <label for='description'>Description</label>
                <textarea className='update-todo-text form-control' rows='4'>
                    This todo item is being updated
                </textarea>
            </div>
            <div className='form-group'>
                <label for='priority'>Priority</label>
                <select className='update-todo-priority form-control col-5'>
                    <option value='Select a priority' selected>Select a priority</option>
                    <option value='1'>High Priority</option>
                    <option value='2'>Medium Priority</option>
                    <option value='3'>Low Priority</option>
                </select>
            </div>
            <div className='form-group d-flex align-items-end flex-column'>
                <button className='update-todo btn btn-lg btn-success'>Save</button>
            </div>
            </form>
        </li>
    </ul>
);