import {combineReducers} from "redux";
import {operationsReducer} from "./todo/reducers/operations.js";

export const rootReducer = combineReducers({
    operationsReducer,
})