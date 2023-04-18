import {AddTodo} from "./AddTodo.jsx"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delall} from "../redux/todo/actions/index.js";


export function Todo() {
    const todos = useSelector((state) => state.operationsReducer);
    const disp = useDispatch();

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
                 <DeleteIcon />
              </div>
          </div>
        )
    )}
            <Button variant="contained" onClick={()=>disp(delall())}>Delete All</Button>
        </div>)
}
