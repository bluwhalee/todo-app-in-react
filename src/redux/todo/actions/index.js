export const ADD_TODO = 'ADD_TODO';
export const DELALLTASKS = 'DELALLTASKS';
export const REMOVETODO = 'REMOVETODO'
export const TOGGLESTATUS = 'TOGGLESTATUS'
export const UPDATETASK = 'UPDATETASK'
export const addtodo = (payload) => {
    return {
        type:'ADD_TODO',
        payload
    }
}
export const delAllTasks = ()=> {
    return{
        type: DELALLTASKS
    }
}
export const removeTask = (payload) =>
{
    return{
        type:REMOVETODO,
        payload
    }
}
export const toggleStatus = (payload) =>
{
    return{
        type:TOGGLESTATUS,
        payload
    }
}
export const updateTask = (payload)=>
{
    return{
        type:UPDATETASK,
        payload
    }
}
