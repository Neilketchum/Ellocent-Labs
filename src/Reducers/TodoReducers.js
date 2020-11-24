import {ADD_TODO,UPDATE_TODO,DELETE_TODO,SHOWFORM} from "../Actions/types"
const initalState = {
    showForm:false,
    todos:[{
        title:"Test Title",
        key:1,
        status:"completed",
        description:" Test Description"
    },
    {
        title:"Test Title2",
        key:2,
        status:"completed",
        description:" Test Description2"
    },
    {
        title:"Test Title3",
        key:3,
        status:"completed",
        description:" Test Description3"
    },
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initalState,action){
    
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
         default:
            return {
                ...state
            }
    }

}