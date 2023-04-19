import {ADD_TODO, DELALLTASKS, REMOVETODO, TOGGLESTATUS} from "../actions/index.js";



const defaultState = [
    {id:23, task: "Jomoloko", status:false},
    {id:33, task: "Say Hello", status:true},
    {id:43, task: "Cycling", status:false},
    {id:53, task: "Badminton", status:true}
]

// state.map(item =>
//     item.id === action.payload.id ? { ...item, status: action.payload.status } : item
// );
export const todoOperationsReducer = (state = defaultState, action) =>{
    switch (action.type)
    {
        case ADD_TODO:
        {
            return [...state,action.payload];
            return [...state,action]
        }
        case DELALLTASKS:
            state = [];
            return [];
        case REMOVETODO:
            return state.filter((todo)=>todo.id !== action.payload);
        case TOGGLESTATUS:
            return state.map(task =>
                    task.id===action.payload?{...task, status: !task.status}:task
            );
        default: return state;
    }
}
