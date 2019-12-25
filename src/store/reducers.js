const initialValue = { counter: 10, todos: [] }
const reducer = (state = initialValue, action) => {

    if (action.type === 'INCR') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if (action.type === 'DEC') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: state.todos.concat({ title: action.payload.title, desc: action.payload.desc })
        }
    }
    else if (action.type === 'DELETE_TODO') {
        return {
            ...state,
            todos: state.todos.filter( todo => {return action.payload.title !== todo.title})
        }
    }
    return state
}
export default reducer;