import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SHOWFORM,SHOWUPDATE,OPKEY } from "../Actions/types"
export const addTodo = (todo) => {
    return (dispatch) => {
        
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
export const updateTodo = (key,todo) => {
    
    return (dispatch) =>{
        dispatch({
            type:UPDATE_TODO,
            key:key,
            payload:{
                todo
            }
        })
    }
}
export const deleteTodo = (key) => {
    console.log(key)
    return dispatch => {
        dispatch({
            type:DELETE_TODO,
            payload:{
                key:key
            }
        })
    }

}
export const showUpdate = ()=>{
    return (dispatch)=>{
        dispatch({
            type:SHOWUPDATE
        })
    }
}
export const showForm = () => {
    return (dispatch)=>{
        dispatch({
            type:SHOWFORM
        })
    }
}
export const opKey = (key) =>{
    return dispatch => {
        dispatch({
            type:OPKEY,
            payload:{
                key:key
            }
        })
    }
}