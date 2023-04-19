import {AddTodo} from "./AddTodo.jsx"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delAllTasks,removeTodo} from "../redux/todo/actions/index.js";
export function Todo() {
    const todos = useSelector((state) => state.todoOperationsReducer);
    const Dispatch = useDispatch();

    return (
        <div>
            <AddTodo />
            {todos.map((todo)=>(
          <div key={todo.id}>
              <Checkbox checked={todo.status} />
              <div>
                  <p style={todo.status===true?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.task}</p>
              </div>
              <div>
                 <EditIcon />
                 <DeleteIcon onClick={()=>Dispatch(removeTodo(todo.id))} />
              </div>
          </div>
        )
    )}
            <Button variant="contained" onClick={()=>Dispatch(delAllTasks())}>Delete All</Button>
        </div>)
}
