import {ADD_TODO, DELALLTASKS} from "../actions/index.js";



const defaultState = [
    {id:23, task: "Jomoloko", status:false},
    {id:33, task: "Say Hello", status:true},
    {id:43, task: "Cycling", status:false},
    {id:53, task: "Badminton", status:true}
]
export const todoOperationsReducer = (state = defaultState, action) =>{
    switch (action.type)
    {
        case ADD_TODO:
        {
            return [...state,action.payload];
        }
        case DELALLTASKS:
            state = [];
            return [];
        default: return state;
    }
}
