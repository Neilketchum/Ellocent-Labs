import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SHOWFORM } from "../Actions/types"
export const addTodo = (todo) => {
    return (dispatch) => {
        console.log(todo)
        dispatch(
            {
                type: ADD_TODO,
                payload:{
                    todo
                }
            }
        )
    }
}
export const updateTodo = () => {

}
export const deleteTodo = () => {

}
export const showForm = () => {
    return (dispatch)=>{
        dispatch({
            type:SHOWFORM
        })
    }
}