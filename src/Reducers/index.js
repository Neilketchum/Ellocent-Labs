import { combineReducers } from "redux";
import TodoReducer from "./TodoReducers"
const rootReducer = combineReducers({
    todos:TodoReducer
})
export default rootReducer