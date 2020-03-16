import React, { useReducer, useState } from "react";
import {reducer, initialState} from '../reducers/Reducer';

import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = () =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodo, setNewTodo] = useState('')
    const handleChanges = e =>{
        setNewTodo(e.target.value);
    }
    // console.log('rendered',state)
    
    return(
        <div>
            <TodoForm dispatch={dispatch} handleChanges={handleChanges} newTodo={newTodo}/>
            <h2>My List</h2>
            {state.map(todo=>{
                return <Todo todo={todo} />
            })}
        </div>

    )
}

export default TodoList