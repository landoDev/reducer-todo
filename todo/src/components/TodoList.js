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
    
    const addTodo = e =>{
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
        setNewTodo('')
    }
    const toggleCompleted = (id) =>{
        dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: id
        })
    }
    const clearCompleted = e =>{
        console.log('clearCompleted is hit')
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        })
    }
    console.log('current state',state)
    return(
        <div>
            <TodoForm addTodo={addTodo} handleChanges={handleChanges} clearCompleted={clearCompleted} newTodo={newTodo}/>
            <h2>My List</h2>
            {state.todo.map(todo=>{
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