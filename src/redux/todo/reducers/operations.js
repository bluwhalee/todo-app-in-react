import {ADD_TODO, DELALLTASKS, REMOVETODO, TOGGLESTATUS,UPDATETASK} from "../actions/index.js";

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
            return [...state,action.payload];
        case DELALLTASKS:
            state = [];
            return [];
        case REMOVETODO:
            if(action.payload.status===true) return state
            else return state.filter((todo)=>todo.id !== action.payload.id);
        case TOGGLESTATUS:
            return state.map(task =>
                    task.id===action.payload?{...task, status: !task.status}:task
            );
        case UPDATETASK:
            return state.map(item =>
                item.id===action.payload.id?{...item,task:action.payload.task}:item
            );
        default: return state;
    }
}
