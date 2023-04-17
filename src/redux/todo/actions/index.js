export const ADD_TODO = 'ADD_TODO';
export const DELALL = 'DELALL'
export const addtodo = (payload) => {
    return {
        type:'ADD_TODO',
        payload
    }
}
export const delall = ()=> {
    return{
        type: DELALL
    }
}