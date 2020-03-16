import React from 'react';

export default function Todo(props){
    console.log('props', props.todo)
    return(
        <div>
            <ul>
                <li>{props.todo.item}</li>
            </ul>
        </div>
    )
}