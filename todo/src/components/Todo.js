import React from 'react';

export default function Todo(props){
    console.log('todo props', props)
    console.log('todo props', props.todo)
    return(
        <div>

            <p className={props.todo.completed ? 'completed-item' : 'incomplete'} >{props.todo.item}</p>

        </div>
    )
    
}