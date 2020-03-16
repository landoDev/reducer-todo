export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 0
}]

export const reducer = (state, action) => {
    console.log('Action', action)
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {item: action.payload, id: new Date()}]
        default:
            return state;
    }
}



// export default reducer