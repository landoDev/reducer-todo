export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 0
}]

export const reducer = (state, action) => {
    console.log('Action', action)
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {item: action.payload, completed: false, id: new Date()}]
        case 'TOGGLE_COMPLETE':
            state.forEach(element => {
                console.log(element)
              return element.completed = true;
            });
        default:
            return state;
    }
}



// export default reducer