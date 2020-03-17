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
    console.log('rendered',state)
    const toggleCompleted = (id) =>{
        dispatch({
            type: 'TOGGLE_COMPLETE',
            id: id
        })
    }
    // const clearCompleted = (id) =>{
    //     dispatch({
    //         type: 'CLEAR_COMPLETED',
    //     })
    // }
    return(
        <div>
            <TodoForm dispatch={dispatch} handleChanges={handleChanges} newTodo={newTodo}/>
            <h2>My List</h2>
            {state.map(todo=>{
                return(
                    <div>
                        <Todo todo={todo} />
                        <input type='checkbox' onClick={()=> toggleCompleted(todo.id)}></input>
                    </div>
                    
                ) 
            })}

        </div>

    )
}

export default TodoList