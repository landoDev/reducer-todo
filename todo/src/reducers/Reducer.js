export const initialState = [{
    task: 'Lean Reducer', 
    completed: false, 
    id: 0
}]

export const reducer = (state, action) => {
    console.log('Action', action)
    switch(action.type){
        case 'ADD_TODO':
            let newTodo = {
                task: action.payload,
                completed: false,
                id: Date.now() 
            }
            return [...state, newTodo]
        case 'TOGGLE_COMPLETE':
            return state.map(task=>{
                if(task.id === action.id){
                    return{
                        ...task,
                        completed: !task.completed
                    }
                }else{
                    return task
                }
            });
        default:
            return state;
    }
}



// export default reducer