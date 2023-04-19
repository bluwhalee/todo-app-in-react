import {AddTodo} from "./AddTodo.jsx"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delAllTasks,removeTask, toggleStatus} from "../redux/todo/actions/index.js";
import {useState, useEffect} from "react";
export function Todo() {
    const todos = useSelector((state) => state.todoOperationsReducer);
    const test = useSelector((state) => state);
    const Dispatch = useDispatch();


    useEffect(()=>
    {
        console.log(todos);
    },[todos])

    useEffect(()=>
    {
        console.log(test);
    },[test])

    return (
        <div>
            <AddTodo />
            {todos.map((todo)=>{

                return(
          <div key={todo.id}>

              <div>
                  <p style={todo.status?{textDecoration:"line-through"}:{textDecoration:"none"}} onClick={()=>{console.log(23);Dispatch(toggleStatus(todo.id))}} >{todo.task}</p>
              </div>
              <div>
                  <EditIcon />
                 <DeleteIcon onClick={()=>Dispatch(removeTask(todo.id))} />
              </div>
          </div>
        )}
    )}
            <Button variant="contained" onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>
        </div>)
}
