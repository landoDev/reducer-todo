import React from 'react';

export default function Todo(props){
    return(
        <div>
            <ul>
                <li>{props.todo.item}</li>
            </ul>
        </div>
    )
}