import React from 'react';
import {Todo} from './todo'

export const TodoList = (props) => {

    const tasks = props.tasks;
    const todos = tasks.map((task, id) => {
      return  <Todo content={task} key={id} index ={id} onDelete={props.onDelete} />
    });
    // console.log(todos);
    return(
        <div className='listWrapper'>
            {todos}
        </div>
    );

}