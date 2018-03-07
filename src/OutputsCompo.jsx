import React from 'react';
import Todos from './Todos';

export default props => (
    <div>
        {<Todos todoList={props.todoList}/>}
    </div>
);