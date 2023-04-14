import {ADD_TODO} from "../actions/index.js";

const dummy = [
    {id:23, task: "Jomoloko", status:false},
    {id:33, task: "Say Hello", status:true},
    {id:43, task: "Cycling", status:false},
    {id:53, task: "Badminton", status:true}
]
export const operationsReducer = (state = dummy, action) =>{
    switch (action.type)
    {
        case ADD_TODO:
        {
            return [...state,action.payload];
        }

        default: return state;
    }
}
