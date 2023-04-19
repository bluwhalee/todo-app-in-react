import {combineReducers} from "redux";
import {todoOperationsReducer} from "./todo/reducers/operations.js";

export const rootReducer = combineReducers({
    todoOperationsReducer,
})
