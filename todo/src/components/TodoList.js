import React, { useReducer } from "react";
import {reducer, initialState} from '../reducers/Reducer'

import Todo from './Todo'



// const initialState = {
//     item: 'Learn about reducers',
//     completed: false,
//     id: 0
// }

// const reducer = (state, action) =>{
//     return state;
// }

const TodoList = () =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return(
        <div>
            <h2>My List</h2>
            {state.map(todo=>{
                return <Todo todo={todo} />
            })}
        </div>

    )
}

export default TodoList