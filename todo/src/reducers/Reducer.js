export const initialState = {
    todo: [{
        task: 'Lean Reducer', 
        completed: false, 
        id: 0
    }]
}

export const reducer = (state, action) => {
    console.log('Action', action)
    // console.log('current state', state.todo)
    switch(action.type){
        
        case 'ADD_TODO':
            // console.log(action.payload)
            // console.log('state on todo action', state.todo)
            // let newTodo = {
            //     task: action.payload,
            //     completed: false,
            //     id: Date.now() 
            // }
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        task: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
            // return [...state.todo, newTodo]
        case 'TOGGLE_COMPLETE':  
            return {
                ...state,
                todo: state.todo.map((task) => {
                if (task.id === action.payload) {
                return {
                    ...task,
                    completed: !task.completed
                }
                }
                else {
                return task
                }
                }
                )
            }
        case 'CLEAR_COMPLETE':
            console.log('clear button triggered', action)
            return{
                ...state,
                todo: state.todo.filter(task=>{ 
                    return task.completed === !task.completed
                }) 
            }


           
        default:
            return state;
    }
}



// export default reducer