import {AddTodo} from "./AddTodo.jsx"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delAllTasks,removeTodo} from "../redux/todo/actions/index.js";
import {useState} from "react";
export function Todo() {
    const todos = useSelector((state) => state.todoOperationsReducer);
    const Dispatch = useDispatch();

    return (
        <div>
            <AddTodo />
            {todos.map((todo)=>{
                const[status, setstatus] = useState(todo.status);
                return(
          <div key={todo.id}>

              <div>
                  <p style={status===true?{textDecoration:"line-through"}:{textDecoration:"none"}} onClick={()=>{setstatus((prev)=>!prev);todo.status=status}} >{todo.task}</p>
              </div>
              <div>
                 <EditIcon />
                 <DeleteIcon onClick={()=>Dispatch(removeTodo(todo.id))} />
              </div>
          </div>
        )}
    )}
            <Button variant="contained" onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>
        </div>)
}
