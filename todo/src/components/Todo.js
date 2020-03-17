import React from 'react';

export default function Todo({todo}){
    return(
        <div>

            <p className={todo.completed ? 'completed-item' : 'incomplete'} >{todo.task}</p>

        </div>
    )
    
}