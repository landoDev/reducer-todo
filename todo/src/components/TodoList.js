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
    const toggleCompleted = () =>{
        dispatch({
            type: 'TOGGLE_COMPLETE'
        })
    }
    console.log(state.items)
    return(
        <div>
            <TodoForm dispatch={dispatch} handleChanges={handleChanges} newTodo={newTodo}/>
            <h2>My List</h2>
            {state.map(todo=>{
                return(
                    <div>
                        <Todo todo={todo} dispatch={dispatch}/>
                        <input type='checkbox' onClick={toggleCompleted}></input>
                    </div>
                    
                ) 
            })}

        </div>

    )
}

export default TodoList