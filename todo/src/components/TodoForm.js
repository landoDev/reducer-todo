import React from 'react';

// const handleSubmit = () =>{

// }

export default function TodoForm(props){
    // console.log('form props', props)
    return(
        <div>
            <label>New To-do: </label>
            <input type='text' placeholder='Input' value={props.newTodo} onChange={props.handleChanges}></input>
            <button onClick={props.addTodo}>Add</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}