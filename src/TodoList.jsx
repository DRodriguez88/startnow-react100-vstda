import React, { Component } from 'react';
import Todo from './Todo';

export default function Todos(props) {
    return (
        <ul className='list-group mr-4'>
         {
            props.todoList.length < 1 ? 
                (<li className='list-group-item list-group-item-primary'>
                    <div>
                        <span className='todoDescription font-weight-bold'>Welcome to Very Simple Todo App!</span>
                        <p>Get started now by adding a new todo on the left.</p>
                    </div>
                </li>)
                : props.todoList.map((todoItem, index) => <Todo todoItem={todoItem} index={index} key={todoItem.description + index} bigStateEdit={props.bigStateEdit} bigStateDeleter={props.bigStateDeleter}/>)
         }
        </ul>
    )
}
