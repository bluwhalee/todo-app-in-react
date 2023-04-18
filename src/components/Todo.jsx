import {useSelector} from "react-redux";
import {AddTodo} from "./AddTodo.jsx"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
export function Todo() {
    const todos = useSelector((state) => state.operationsReducer);
    return (
        <div>
            <AddTodo />
            {todos.map((todo)=>(
          <div key={todo.id}>
              <input type="checkbox" checked={todo.status}></input>
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
        </div>)
}
