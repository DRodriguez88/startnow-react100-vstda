import React from 'react';

export default props => (
    <ul className='list-group mr-4'>
        <li className='list-group-item list-group-item-light text-dark'>View Todos</li>
        <li className='list-group-item list-group-item-danger font-weight-bold'>
            <input type='checkbox' />
            This todo is high priority
            <span className="glyphicon glyphicon-trash pull-right ml-4"></span>
            <span className="glyphicon glyphicon-edit pull-right"></span>
        </li>
        <li className='list-group-item list-group-item-success font-weight-bold'>
            <input type='checkbox' />
            This todo is low priority
            <span className="glyphicon glyphicon-trash pull-right ml-4"></span>
            <span className="glyphicon glyphicon-edit pull-right"></span>
        </li>
        <li className='list-group-item list-group-item-warning font-weight-bold'>
            <input type='checkbox' />
            This todo is medium priority
            <span className="glyphicon glyphicon-trash pull-right ml-4"></span>
            <span className="glyphicon glyphicon-edit pull-right"></span>
        </li>
        <li className='list-group-item list-group-item-success font-weight-bold'>
            <form className='outputUpdater'>
            <div className='form-group'>
                <label for='description'>Description</label>
                <textarea className='update-todo-text form-control' rows='4'>
                    This todo item is being updated
                </textarea>
            </div>
            <div className='form-group'>
                <label for='priority'>Priority</label>
                <select className='form-control col-5'>
                    <option value='Select a priority' selected>Select a priority</option>
                    <option value='1'>High Priority</option>
                    <option value='2'>Medium Priority</option>
                    <option value='3'>Low Priority</option>
                </select>
            </div>
            <div className='form-group d-flex align-items-end flex-column'>
                <button className='btn btn-lg btn-success'>Save</button>
            </div>
            </form>
        </li>
    </ul>
);