import React from 'react';

// const handleSubmit = () =>{

// }

export default function TodoForm(props){
    console.log('form props', props)
    return(
        <div>
            <label>New To-do: </label>
            <input type='text' placeholder='Input' value={props.newTodo} onChange={props.handleChanges}></input>
            <button onClick={()=> props.dispatch({
                type: 'ADD_TODO',
                payload: props.newTodo
            })}>Add</button>
            <button onClick={()=> props.dispatch({
                type: 'CLEAR_COMPLETED',
            })}>Clear Completed</button>
        </div>
    )
}