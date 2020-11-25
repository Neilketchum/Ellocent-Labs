import {ADD_TODO,UPDATE_TODO,DELETE_TODO,SHOWFORM,SHOWUPDATE,OPKEY} from "../Actions/types"


const initalState = {
    showForm:false,
    showUpdate:false,
    operationKey:null,
    todos:[
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initalState,action){
    console.log(action.type)
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            }
        case SHOWFORM:
            
            return {
                ...state,
                showForm:!state.showForm
            }
        case SHOWUPDATE:
            state.todos.filter(todo=>todo!==action.key)
            return {
                ...state,
                showUpdate:!state.showUpdate
            }
        case UPDATE_TODO:
            state.todos = state.todos.filter(todo=>todo.key!==action.key)
            return{
                ...state,
                todos: [...state.todos, action.payload.todo]
            }
        case OPKEY:
            return{
                ...state,
                operationKey:action.payload.key
            }
        case DELETE_TODO:
        
            state.todos = state.todos.filter(todo=>todo.key!==action.payload.key)
            
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }

}