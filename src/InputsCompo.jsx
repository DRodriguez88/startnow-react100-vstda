import React from 'react';

export default props => (
    <div className='col-sm-3'>    
        <div className='card'>
            <div className='card-header'>Add new Todo</div>
            <div className='card-body'>
                <p className='font-weight-bold'>I want to..</p>
                <textarea />
                <p className='font-weight-bold'>How much of a priority is this?</p>
                <select className='create-todo-priority'>
                    <option selected>
                        Select a priority
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
            <button className='btn btn-success btn-block'>Add</button>
            </div>
        </div>
    </div>
);